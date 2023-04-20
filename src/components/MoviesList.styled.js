import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  margin-top: 30px;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-auto-rows: 520px;
  display: grid;
  list-style-type: none;
  grid-column-gap: 30px;
  grid-row-gap: 20px;
  width: 100%;
  justify-content: center;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: center;
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 10px;
  width: 300px;
  height: 450px;
  background: #707793;
`;

export const TextContainer = styled.div`
  padding: 10px 5px;
  > p {
    font-size: 18px;
    color: #b0b4c3;
    text-transform: uppercase;
    font-weight: 500;
  }
`;
