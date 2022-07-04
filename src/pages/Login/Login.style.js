import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #0a69ed;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Form = styled.form`
  width: 380px;
  height: 300px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 16px;
  padding: 20px;
`;

export const Inputs = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  p {
    font-weight: 500;
  }
  input {
    height: 30px;
    border: 0.5px solid rgb(171, 164, 164);
    border-radius: 4px;
    outline: none;
    text-indent: 5px;
    font-size: 15px;
    font-family: cursive;
    &:focus {
      border: 1px solid #0a69ed;
    }
  }
`;
