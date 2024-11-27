import styled from '@emotion/styled';
import { MdFreeBreakfast, MdLunchDining, MdDinnerDining } from 'react-icons/md';
import { SelectorButton } from '../../widgets';
import { useSelectedDormMenuStore } from '../../shared';

export default function MenuTimeSelectorButton() {
  const { clicked, setSelectedMenu, setClicked, setSelectedMenuId } =
    useSelectedDormMenuStore();
  return (
    <>
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
              setSelectedMenuId(null);
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
    </>
  );
}

const Icons = styled.p`
  @media (max-width: 480px) {
    display: none;
  }
`;
