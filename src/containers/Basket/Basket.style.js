import styled from "styled-components";

export const DropdownContent = styled.div`
  display: none;
  width: 330px;
  padding: 10px 15px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: absolute;
  top: 60px;
  right: 70px;
  overflow-y: scroll;
  gap: 10px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BasketWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &:hover ${DropdownContent} {
    display: block;
  }

  svg {
    font-size: 30px;
    color: #0a69ed;
  }
`;

export const CardItem = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  margin: 10px 0px;
`;

export const CardMedia = styled.img`
  width: 25%;
  height: 100%;
  border-radius: 8px;
`;

export const CardDetails = styled.div`
  width: 75%;
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  padding: 0px 20px;
  box-sizing: border-box;
  gap: 8px;
`;

export const ButtonDiv = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
`;
