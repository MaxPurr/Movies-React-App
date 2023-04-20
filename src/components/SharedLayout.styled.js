import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  padding: 20px 140px;
  background-color: #000;

  > nav {
    width: 180px;
    justify-content: space-between;
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #707793;
  font-weight: 500;
  font-size: 26px;

  &.active {
    color: #3bba9c;
  }
`;
