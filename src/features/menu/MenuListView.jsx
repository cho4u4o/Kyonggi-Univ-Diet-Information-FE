import styled from '@emotion/styled';
import { useEffect } from 'react';
import {
  requests,
  fetchData,
  getTodayDate,
  setDormMenuData,
  useSelectedDormMenuStore,
} from '../../shared';

export default function MenuListView() {
  const {
    clicked,
    todayMenu,
    setTodayMenu,
    setWeeklyMenu,
    selectedMenu,
    setSelectedMenu,
  } = useSelectedDormMenuStore();

  useEffect(() => {
    fetchData(requests.fetchDormMenu).then((response) => {
      const data = setDormMenuData(response);
      setWeeklyMenu(data);
      setTodayMenu(data[getTodayDate('weekday')]);
    });
  }, []);

  const labels = ['BREAKFAST', 'LUNCH', 'DINNER'];
  const runningTimes = ['', '11:00 ~ 13:30', '17:00 ~ 19:00'];

  return (
    <MenuDiv>
      {getTodayDate('weekday') === 'SUNDAY' ||
      getTodayDate('weekday') === 'SATURDAY' ? (
        <Text color="#000">주말에는 운영하지 않습니다.</Text>
      ) : clicked === 0 ? (
        <Text color="#000">미운영</Text>
      ) : !todayMenu ? (
        <Text color="#ccc">로딩중</Text>
      ) : (
        <>
          <RunningTime>운영시간 {runningTimes[clicked]}</RunningTime>
          {todayMenu[labels[clicked]].menus.map((menu) => (
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
  );
}

const RunningTime = styled.p`
  font: 500 15px Pretendard;
  color: #00abaa;
  margin: 0;
`;

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

  @media (max-width: 768px) {
    font-size: 20px;
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

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;
