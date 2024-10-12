import styled from '@emotion/styled'
import StarRatingSelector from './StarRatingSelector'

function ReviewOption() {
  const OptionContainer = styled.div`
    margin: 10px 0;
    display: flex;
    width: 50%;
    align-items: start;
    justify-content: space-between;
    flex-wrap: wrap;
    @media (max-width: 480px) {
      width: 80%;
    }
  `
  const OptionWrapper = styled.div`
    display: flex;
    height: 40px;
    align-items: center;
    padding: 5px;
  `
  const Select = styled.select`
    padding: 5px 10px;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    width: 150px;

    &:hover,
    &:active,
    &:focus,
    &:focus-visible {
      border-color: #00abaa;
    }
  `
  const P = styled.p`
    margin-right: 10px;
  `

  return (
    <OptionContainer>
      <OptionWrapper>
        <P>식당</P>
        <form name="restaurant">
          <Select name="rselect">
            <option value="all">경기드림타워</option>
            <option value="chinese">중식</option>
            <option value="western">일식</option>
            <option value="korean">한식</option>
            <option value="japanese">일본식</option>
            <option value="dessert">디저트</option>
            <option value="other">기타</option>
          </Select>
        </form>
      </OptionWrapper>
      <OptionWrapper>
        <P>세부식당</P>
        <Select></Select>
      </OptionWrapper>
      <OptionWrapper>
        <P>별점</P>
        <StarRatingSelector totalstars={5} />
      </OptionWrapper>
    </OptionContainer>
  )
}

export default ReviewOption
