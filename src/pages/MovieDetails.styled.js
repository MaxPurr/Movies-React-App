import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.div`
  display: flex;
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 10px;
  width: 450px;
  height: 675px;

  > img {
    width: 100%;
    height: 100%;
  }
`;

export const Information = styled.div`
  height: 600px;
  margin-left: 70px;
  margin-top: 10px;
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 36px;
  color: #fff;
`;

export const SubTitle = styled.h2`
  margin-top: 25px;
  font-size: 24px;
  color: #b0b4c3;
`;

export const Text = styled.p`
  line-height: 30px;
  margin-top: 10px;
  font-size: 20px;
  color: #b0b4c3;
`;

export const UserScore = styled.span`
  margin-left: 4px;
  font-size: 20px;
  border-radius: 30px;
  padding: 4px 12px;
  background-color: #3bba9c;
  color: #fff;
`;

export const AdditionalInformation = styled.ul`
  list-style-type: none;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  width: 190px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;

  > p {
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 30px;
    padding: 6px 12px;
    background-color: #707793;
    color: #2e3047;
  }

  &.active {
    > p {
      background-color: #3bba9c;
      color: #fff;
    }
  }
`;
export const GoBackButton = styled.button`
  font-size: 20px;
  border: none;
  position: absolute;
  top: 90px;
  left: 20px;
  padding: 10px 26px;
  background: #3bba9c;
  border-radius: 30px;
  color: #fff;
`;
