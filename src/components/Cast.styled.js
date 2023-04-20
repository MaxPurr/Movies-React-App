import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 40px;
  grid-template-columns: repeat(auto-fill, 100px);
  display: grid;
  list-style-type: none;
  grid-column-gap: 30px;
  grid-row-gap: 25px;
  width: calc(100vw - 300px);
  justify-content: center;
`;

export const ListItem = styled.li``;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 4px;
  width: 100px;
  height: 120px;
  background: #707793;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 2px;
`;

export const Name = styled.p`
  color: #b0b4c3;
`;

export const Character = styled.p`
  color: #707793;
`;
