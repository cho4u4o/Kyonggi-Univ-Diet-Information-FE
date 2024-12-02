import styled from '@emotion/styled';
import StarRatingSelector from './ReviewStarRatingSelector';
import { axios, getCookie, requests } from '../../shared';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function ReviewInput({ menuId }) {
  const [value, setValue] = useState('');
  const token = getCookie('token');
  const postComment = (comment) => {
    axios.post(
      requests.postComment + menuId,
      {
        rating: 5,
        title: '',
        content: comment,
      },
      { headers: { Authorization: `Bearer ${getCookie(token).toString()}` } },
    );
    console.log(requests.postMenuReview + menuId);
    console.log(`Bearer ${getCookie('token').toString()}`);
  };

  useEffect(() => {
    setValue('');
  }, []);

  return (
    <>
      {token ? (
        <ReviewInputWrapper>
          <InputContainer>
            <Textarea
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                console.log(value);
              }}
            />
            <Button
              onClick={() => {
                if (value.length > 0) {
                  postComment(value);
                  setValue('');
                } else {
                  alert('내용을 입력하세요!');
                }
              }}
            >
              완료
            </Button>
          </InputContainer>
        </ReviewInputWrapper>
      ) : (
        <ReviewInputWrapper>
          <InputContainer style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: '10px',
                border: '0.5px solid #ccc',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backdropFilter: 'blur(3px)',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                zIndex: 1,
                display: 'grid',
                placeItems: 'center',
              }}
            >
              <div style={{ display: 'grid', placeItems: 'center' }}>
                <p style={{ fontSize: '15px', margin: 0, marginBottom: '6px' }}>
                  로그인 후 후기를 작성하세요!
                </p>
                <LoginLink to="/login">로그인</LoginLink>
              </div>
            </div>

            <Textarea />
            <Button>완료</Button>
          </InputContainer>
        </ReviewInputWrapper>
      )}
    </>
  );
}

const ReviewInputWrapper = styled.div`
  height: 80px;
`;

const LoginLink = styled(Link)`
  font-size: 14px;
  color: black;
  text-decoration: none;
  line-height: 1.5;
  padding: 4px 12px;
  background-color: #fff;
  border: 0.5px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 auto;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #00abaa;
    color: #fff;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  height: 5rem;
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 5fr 1fr;
  grid-template-rows: 1fr;
`;
const Textarea = styled.textarea`
  grid-column: 1;
  grid-row: 1;
  font-size: 15px;
  font-family: 'Pretendard';
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
`;
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
`;
