import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { IoMdThumbsUp } from 'react-icons/io';
import { MdOutlineThumbUp } from 'react-icons/md';
import {
  MdFreeBreakfast,
  MdLunchDining,
  MdDinnerDining,
  MdOutlineMenuBook,
} from 'react-icons/md';
import styled from '@emotion/styled';
import reviews from '../datas/reviews.json';
import { useEffect } from 'react';
import {
  InnerContentCard,
  InnerContentWrapper,
} from '../widgets/InnerContentComponents';
import { fetchData } from '../utils/fetchData';
import { requests } from '../shared/apis/requests';
import { getTodayDate } from '../utils/getTodayDate';
import { setDormMenuData } from '../utils/setDormMenuData';
import {
  Selector,
  SelectorButton,
} from '../features/restaurant/SelectorComponents';

export default function MenuCardSection() {
  const [clicked, setClicked] = useState(1);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [weeklyMenu, setWeeklyMenu] = useState(null);
  const [todayMenu, setTodayMenu] = useState(null);

  useEffect(() => {
    fetchData(requests.fetchDormMenu).then((response) => {
      const data = setDormMenuData(response);
      setWeeklyMenu(data);
      setTodayMenu(data[getTodayDate('weekday')]);
    });
  }, []);

  const menuItems = todayMenu;
  const menuReviews = reviews.DormMenuReviews;
  const labels = ['BREAKFAST', 'LUNCH', 'DINNER'];

  return (
    <InnerContentWrapper>
      <Selector marginDirection="margin-right">
        {Array.from({ length: 3 }).map((_, index) => {
          const labelsKR = ['아침', '점심', '저녁'];
          const icons = [
            <MdFreeBreakfast size={20} />,
            <MdLunchDining size={20} />,
            <MdDinnerDining size={20} />,
          ];
          return (
            <SelectorButton
              key={index}
              onClick={() => {
                setClicked(index);
                setSelectedMenu(null);
              }}
              isSelected={clicked === index}
              marginright={index === 2 ? 0 : 10}
              height={140}
            >
              <Icons> {icons[index]}</Icons>
              {labelsKR[index]}
            </SelectorButton>
          );
        })}
      </Selector>
      <InnerContentCard>
        <MenuDiv>
          {getTodayDate('weekday') === '일' ||
          getTodayDate('weekday') === '토' ? (
            <Text color="#000">주말에는 운영하지 않습니다.</Text>
          ) : clicked === 0 ? (
            <Text color="#000">미운영</Text>
          ) : !menuItems ? (
            <Text color="#ccc">로딩중</Text>
          ) : (
            <>
              {menuItems[labels[clicked]].menus.map((menu) => (
                <Menu
                  key={menu.id}
                  isSelected={selectedMenu === menu.menu}
                  onClick={() => {
                    setSelectedMenu(menu.menu);
                  }}
                >
                  {menu.menu}
                </Menu>
              ))}
            </>
          )}
        </MenuDiv>
        <MenuReviewDiv>
          <MenuReview selectedMenu={selectedMenu} menuReviews={menuReviews} />
        </MenuReviewDiv>
      </InnerContentCard>
    </InnerContentWrapper>
  );
}

const MenuDiv = styled.div`
  margin: 0 auto;
  flex-direction: column;
  text-align: center;
  padding-right: 20px;

  @media (max-width: 480px) {
    padding: 0;
    text-align: start;
    margin: 0;
  }
`;

const Menu = styled.p`
  font-family: Pretendard;
  font-size: 25px;
  font-weight: 500;
  margin: 0px;
  padding-top: 12px;
  cursor: pointer;
  color: ${(props) => (props.isSelected ? '#00abaa' : '#000')};

  &:hover {
    color: #00abaa;
  }

  @media (max-width: 480px) {
    padding-top: 8px;
    font-size: 15px;
  }
`;

const Text = styled.p`
  font-family: Pretendard;
  font-size: 25px;
  font-weight: 500;
  margin: 0px;
  padding-top: 12px;
  color: ${(props) => props.color};
`;

const ReviewScrollView = styled.div`
  overflow: scroll;
  height: 44vh;
`;

const Review = styled.div`
  box-sizing: border-box;
  padding: 12px;
  margin: 0px;
  font-family: Pretendard;
  font-size: 15px;
  line-height: 1.5em;
  border-radius: 10px;
  background-color: #fff;
  margin-bottom: 8px;
`;
const ReviewInfo = styled.div`
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 600;
  margin: 0px;
  padding-bottom: 4px;
  cursor: pointer;
  color: #000;
  display: flex;
  justify-content: space-between;
`;

const MenuReviewDiv = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 20px;
  flex-direction: column;

  width: 50vw;
  height: 100%;
  background-color: #f4f4f4;
  border-radius: 15px;
  font-family: Pretendard;
  font-size: 20px;
  @media (max-width: 480px) {
    display: none;
  }
`;

const ReviewTitle = styled.p`
  font-size: 25px;
  margin: 0;
  margin-bottom: 20px;
`;

const LikeBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-left: 4px;
`;

const Unselected = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  line-height: 3em;
`;

const Icons = styled.p`
  @media (max-width: 480px) {
    display: none;
  }
`;

const MenuReview = ({ selectedMenu, menuReviews }) => {
  if (!selectedMenu)
    return (
      <Unselected>
        <MdOutlineMenuBook size={35} />
        메뉴를 선택하고 리뷰를 확인하세요!
      </Unselected>
    );
  if (!menuReviews) return <div></div>;

  const selectedReview = menuReviews.find((item) => item.id === selectedMenu);

  if (!selectedReview) return <div>리뷰를 찾을 수 없습니다.</div>;

  return (
    <div>
      {menuReviews && (
        <>
          <ReviewTitle>
            <b>{selectedMenu}</b>, 어떨까?
          </ReviewTitle>
          <ReviewScrollView>
            {selectedReview.reviews.map((review) => (
              <Review key={review.id}>
                <ReviewInfo>
                  <span>
                    {review.memberName}{' '}
                    <span style={{ fontSize: '12px', fontWeight: 500 }}>
                      2024-11-08
                    </span>
                  </span>
                  <span>
                    <span>
                      {Array.from({ length: review.rating }).map((_, index) => (
                        <FaStar size={12} key={index} />
                      ))}
                    </span>
                    <LikeBtn>
                      <MdOutlineThumbUp />
                      {/* <IoMdThumbsUp /> */}
                    </LikeBtn>
                  </span>
                </ReviewInfo>
                {review.content}
              </Review>
            ))}
          </ReviewScrollView>
        </>
      )}
    </div>
  );
};
