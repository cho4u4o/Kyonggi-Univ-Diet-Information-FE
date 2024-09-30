import styled from '@emotion/styled'
import StarRatingSelector from './StarRatingSelector'

function ReviewOption() {
  const OptionContainer = styled.div`
    margin: 20px 0;
    display: grid;
    grid-template-columns: repeat(3, 0.5fr 1fr);
    height: 45px;
    width: 670px;
    align-items: center;
  `
  const P = styled.p<{ gridColumn: number }>`
    grid-column: ${(props) => props.gridColumn};
  `

  return (
    <OptionContainer>
      <P gridColumn={1}>식당</P>
      <P gridColumn={3}>세부식당</P>
      <P gridColumn={5}>별점</P>
      <StarRatingSelector totalstars={5} />
    </OptionContainer>
  )
}

export default ReviewOption
