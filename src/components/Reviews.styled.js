import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 40px;
  list-style-type: none;
  width: calc(100vw - 300px);
  justify-content: center;
`;

export const ListItem = styled.li`
  margin-bottom: 40px;
  background-color: #000;
  padding: 16px 20px;
  border-radius: 10px;
`;

export const Author = styled.h3`
  margin-left: 20px;
  font-size: 22px;
  color: #b0b4c3;
`;

export const Review = styled.p`
  font-size: 20px;
  line-height: 30px;
  color: #707793;
  &::before {
    margin-top: 4px;
    margin-bottom: 10px;
    content: '';
    width: 100%;
    height: 2px;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(51, 161, 135, 1) 1%,
      rgba(0, 0, 0, 1) 30%,
      rgba(0, 0, 0, 1) 100%
    );
    display: block;
  }
`;
