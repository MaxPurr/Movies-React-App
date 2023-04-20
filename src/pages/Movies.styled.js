import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  top: 0;
  left: 0;
  width: 600px;
  height: 50px;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 30px;
  background: #fff;
  padding: 15px 20px;
  font-size: 24px;
  outline: none;
  color: #2e3047;

  &::placeholder {
    color: #707793;
    opacity: 1;
  }
`;

export const Button = styled.button`
  font-size: 20px;
  border: none;
  position: absolute;
  top: 0;
  right: -1px;
  height: 100%;
  padding: 10px 26px;
  background: #3bba9c;
  border-radius: 30px;
  color: #fff;
`;
