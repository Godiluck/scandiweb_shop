import styled from "styled-components";

export const CurrencyWrapper = styled.div`
  position: absolute;
  top: 64px;
  right: 128px;
  width: 128px;
  height: 192px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;

  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 480px) {
    top: 40px;
    right: 32px;
    width: 128px;
    height: 192px;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    right: 64px;
  }
`;

export const CurrencyDiv = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  z-index: 3;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  &:hover {
    cursor: pointer;
    background-color: #8d8f9a;
  }
`;

export const CurrencyItem = styled.div`
  font-weight: 500;
  font-size: 18px;
  text-align: right;
  
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;