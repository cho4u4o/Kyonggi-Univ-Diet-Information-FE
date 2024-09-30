import styled from '@emotion/styled'
import ReviewOption from './ReviewOptions'

function ReviewInput() {
  const InputContainer = styled.div`
    width: 100%;
    height: 5rem;
    margin: 1.25rem 0;
    display: grid;
    grid-template-columns: 5fr 1fr;
    grid-template-rows: 1fr;
  `
  const Textarea = styled.textarea`
    grid-column: 1;
    grid-row: 1;
    font-size: 12px;
    width: 100%;
    height: 100%;
    padding: 15px;
    border: 1px solid #e0e0e0;
    border-radius: 10px 0 0 10px;
    resize: none;
    outline: none;
    box-sizing: border-box;
    transition: border-color 0.2s ease-in-out;

    &:focus {
      border-color: #00abaa;
    }
  `
  const Button = styled.button`
    grid-column: 2;
    grid-row: 1;
    border: none;
    border-radius: 0 10px 10px 0;
    background: #333;
    color: #fff;
    width: 100%;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #00abaa;
    }
  `
  const Input = () => (
    <InputContainer>
      <Textarea />
      <Button>완료</Button>
    </InputContainer>
  )

  return (
    <>
      <h1>전체 후기</h1>
      <ReviewOption />
      <Input />
    </>
  )
}

export default ReviewInput
