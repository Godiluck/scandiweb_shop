import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-weight: 300;
  font-size: 16px;
  margin-bottom: 8px;
`;

export const SubTitle = styled.span`
  font-weight: 300;
  font-size: 16px;
`;

export const PriceValue = styled.span`
  font-weight: 500;
  font-size: 16px;
  margin: 5px 0 27px 0;

  @media screen and (max-width: 480px) {
    margin: 5px 0 16px 0;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  margin-left: 18px;

  @media screen and (max-width: 480px) {

  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-right: 10px;

  @media screen and (max-width: 480px) {
    margin-right: 0;
    margin-left: 16px;
  }
`;

export const Plus = styled.div`
  width: 29px;
  height: 29px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;

export const Quantity = styled.span`
  margin: 24px 0;
`;

export const Minus = styled.div`
  width: 29px;
  height: 29px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;

export const ImageContainer = styled.div`
    width: 105px;
  height: 100%;
`;

export const Image = styled.img`
    width: 100%;
  height: 100%;
  object-fit: contain;
`;