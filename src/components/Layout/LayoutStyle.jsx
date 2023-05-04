import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  width: 100%;
  box-shadow: 0px 0px 9px 4px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 24px;
  padding: 16px;
`;

export const Link = styled(NavLink)`
  font-size: 28px;
  color: #7e7f86;

  &.active {
    color: #25202f;
    text-decoration: underline;
  }
`;
