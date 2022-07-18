import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

export const Icons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  a {
    &:nth-child(1) {
      color: #fb3958;
    }
    &:nth-child(2) {
      color: red;
    }
    &:nth-child(3) {
      color: blue;
    }
    &:nth-child(4) {
      color: #171515;
    }
  }
  svg {
    font-size: 40px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      margin-top: -20px;
    }
  }
  a{
    text-decoration: none;
  }
`;
