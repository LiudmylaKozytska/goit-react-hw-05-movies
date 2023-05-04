import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 16px;
  margin: 12px 4px;
  width: 100%;
  border: 1px solid grey;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  margin-left: 32px;
  font-size: 24px;
  font-weight: 500;
  color: #25202f;
`;

export const PopMoviesList = styled.ul`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-end;
  flex-grow: grow;
  gap: 12px;
`;

export const PopMovieItem = styled.li`
  flex-grow: 1;
  width: 300px;
  border: 1px solid grey;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.5);
`;

export const PopMovieImage = styled.img`
  width: 100%;
  display: block;
`;

export const PopMovieTitle = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-top: 1px solid grey;
  height: 64px;
  font-size: 20px;
  font-weight: 500;
  color: #25202f;
`;
