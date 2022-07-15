// import styled from "styled-components";

import styled from "styled-components";
import { colors } from "../../assets/styles/colors";

// export const Wrapper = styled.div`
//   width: 100%;
//   height: 100vh;
//   background: #0a69ed;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-family: Arial, Helvetica, sans-serif;
// `;

// export const Form = styled.form`
//   width: 380px;
//   height: 300px;
//   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
//   background-color: white;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   flex-direction: column;
//   border-radius: 16px;
//   padding: 20px;
// `;

// export const Inputs = styled.div`
//   width: 80%;
//   height: auto;
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   p {
//     font-weight: 500;
//   }
//   input {
//     height: 30px;
//     border: 0.5px solid rgb(171, 164, 164);
//     border-radius: 4px;
//     outline: none;
//     text-indent: 5px;
//     font-size: 15px;
//     font-family: cursive;
//     &:focus {
//       border: 1px solid #0a69ed;
//     }
//   }
// `;
export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #0a69ed;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Form = styled.div`
  width: 700px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 50px;
`;
export const Inputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  input {
    outline: none;
    color: #0a69ed;
    height: 45px;
    border: none;
    border: 0.5px solid rgb(171, 164, 164);
    border-radius: 4px;
    outline: none;
    text-indent: 5px;
    font-size: 15px;
    font-family: cursive;
  }
  textarea {
    margin-top: 10px;
    resize: none;
    box-shadow: 0 0 10px rgb(0 0 0 / 85%);
    background-color: #212121;
    color: #ff651c;
    border: none;
    border-radius: 5px;
    margin-top: 25px;
    text-indent: 10px;
    outline: none;
  }
  button {
    width: 180px;
    height: 50px;
    background-color: #ff651c;
    color: white;
    margin-top: 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      background-color: inherit;
      border: 3px solid #ff651c;
    }
  }
`;

export const InputsRow = styled.div`
  display: flex;
  justify-content: space-between;
  input {
    width: 45%;
    height: 45px;
    background-color: white;
    border: none;
    border-radius: 4px;
    text-indent: 5px;
    border: 0.5px solid rgb(171, 164, 164);
  }
`;
