import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { RiceImg } from '../../shared/assets';
import { useSelectedRestaurantStore } from '../../shared/stores';
import { InnerTitlesWrapper, Selector, SelectorButton } from '../../widgets';
import { restaurantInfo } from '../../shared/datas';

export default function RestaurantDetailFrame() {
  const { selectedRest, setSelectedRest } = useSelectedRestaurantStore();
  const restaurantList = Array.from(
    Object.keys(restaurantInfo.restaurants),
    (x) => x,
  );
  const restaurantOpenhr = Array.from(
    Object.values(restaurantInfo.restaurants),
    (x) => x.openingHours,
  );

  return (
    <Body>
      <InnerTitlesWrapper
        logo={RiceImg}
        title={restaurantList[selectedRest]}
        subtitle={restaurantOpenhr[selectedRest]}
      />
      <MenuSelectorWrapper>
        <Outlet />
        <Selector marginDirection="margin-left" theme="black">
          {restaurantList.map((restaurant, index) => (
            <SelectorButton
              key={index}
              isSelected={index === selectedRest}
              onClick={() => setSelectedRest(index)}
              height={90}
              theme="black"
              marginright={index === 4 ? 0 : 10}
            >
              {restaurant}
            </SelectorButton>
          ))}
        </Selector>
      </MenuSelectorWrapper>
    </Body>
  );
}

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100vh - 100px);
  margin: 0;
  background-color: #333;

  @media (max-width: 480px) {
    flex-direction: column;
    height: calc(100vh - 70px);
  }
`;

const MenuSelectorWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin: 10px 0;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;
