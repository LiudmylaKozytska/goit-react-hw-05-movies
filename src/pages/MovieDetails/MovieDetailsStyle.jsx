import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieIdContainer = styled.div`
  @media screen and (min-width: 320px) {
    width: 280px;
    margin: auto;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    margin: 0;
  }
`;
export const MovieImage = styled.img`
  @media screen and (min-width: 320px) {
    width: 280px;
    max-width: 728px;
    display: block;
  }
`;

export const MovieContainer = styled.div`
  @media screen and (min-width: 768px) {
    margin: 12px;
    min-width: 400px;
    max-width: 900px;
  }

  @media screen and (min-width: 1280px) {
    min-width: 900px;
  }
`;

export const MovieDescription = styled.p`
  font-size: 18px;
  text-align: justify;
  margin: 12px 0;
`;

export const MovieSpanText = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

export const MovieIdLink = styled(Link)`
  display: block;
  color: black;
  margin: 12px 0;
`;
