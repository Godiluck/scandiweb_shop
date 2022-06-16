import styled from "styled-components";

export const ButtonContainer = styled.div`
  opacity: 0;
  position: absolute;
  right: 0;
  bottom: 72px;
  margin-right: 32px;
  padding: 16px;
  border-radius: 50%;
  background-color: #5ece7b;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    bottom: 64px;
    margin-right: 24px;
    padding: 24px;
    cursor: pointer;
  }
`;

export const Container = styled.div`
  flex: 1;
  position: relative;
  margin: 16px;
  padding: 16px;
  height: 450px;
  min-width: 385px;
  max-width: 385px;

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }

  &:hover ${ButtonContainer} {
    opacity: 1;
  }

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    margin: 16px 0;
    min-width: 360px;
    max-width: 360px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80%;
  background-color: black;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: white;
`;

export const NoStockContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: rgba(255, 255, 255, 0.6);
`;

export const NoStock = styled.span`
  font-weight: 400;
  font-size: 24px;
  color: #8d8f9a;
`;

export const CartIcon = styled.img``;

export const InfoContainer = styled.div`
  margin: 24px 0;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.span`
  font-weight: 300;
  font-size: 18px;
`;

export const Price = styled.span`
  font-weight: 500;
  font-size: 18px;
`;