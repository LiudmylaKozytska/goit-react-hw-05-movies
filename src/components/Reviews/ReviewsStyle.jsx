import styled from '@emotion/styled';

export const ReviewsList = styled.ul`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-end;
  flex-grow: 1;
  gap: 12px;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 570px;
    left: 8px;
    right: 8px;
  }
`;

export const ReviewsText = styled.p`
  font-size: 18px;
  margin: 8px;
`;

export const ReviewsAlert = styled.p`
  font-size: 28px;
  margin: 16px;
  font-weight: 600;
`;
