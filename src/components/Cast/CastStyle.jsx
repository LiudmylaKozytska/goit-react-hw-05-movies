import styled from '@emotion/styled';

export const CastListContainer = styled.div`
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin-top: 48px;
  }
`;

export const CastList = styled.ul`
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

export const CastDescription = styled.div`
  display: block;
  text-align: center;
  padding: 8px;
`;

export const CastCharacter = styled.p`
  font-size: 18px;
  text-align: center;
  margin: 8px;
`;
