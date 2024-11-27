import styled from '@emotion/styled';
import { IoMdRefresh } from 'react-icons/io';
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

  const renderContent = () => {
    const weekday = getTodayDate('weekday');

    if (['SATURDAY', 'SUNDAY'].includes(weekday)) {
      return <Text color="#000">주말에는 운영하지 않습니다.</Text>;
    }

    if (clicked === 0) {
      return <Text color="#000">미운영</Text>;
    }

    if (!todayMenu) {
      return (
        <MenuListHeader>
          <Text color="#CCC">로딩중</Text>
          <RefreshButton onClick={() => window.location.reload()}>
            <IoMdRefresh size={18} />
          </RefreshButton>
        </MenuListHeader>
      );
    }

    return (
      <>
        <MenuListHeader>
          <RunningTime>운영시간 {runningTimes[clicked]}</RunningTime>
          <RefreshButton onClick={() => window.location.reload()}>
            <IoMdRefresh size={18} />
          </RefreshButton>
        </MenuListHeader>
        {todayMenu[labels[clicked]].menus.map(({ id, menu }) => (
          <Menu
            key={id}
            isSelected={selectedMenu === menu}
            onClick={() => setSelectedMenu(menu)}
          >
            {menu}
          </Menu>
        ))}
      </>
    );
  };

  return <MenuDiv>{renderContent()}</MenuDiv>;
}

const RefreshButton = styled.button`
  display: none;
  @media (max-width: 480px) {
    color: #000;
    all: unset;

    &:hover {
      color: #00abaa;
    }
  }
`;

const MenuListHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font: 500 15px Pretendard;
  margin: 0;
  @media (max-width: 480px) {
    justify-content: space-between;
  }
`;

const RunningTime = styled.span`
  color: #00abaa;
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
    width: 100%;
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
  color: ${(props) => props.color};

  @media (max-width: 480px) {
    font-size: 15px;
    padding-top: ${({ padding }) => (padding ? 0 : 8)}px;
  }
`;
