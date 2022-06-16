import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;

  @media screen and (max-width: 480px) {
    margin: 10px 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 30px;
  margin-bottom: 16px;

  @media screen and (max-width: 480px) {
    font-size: 22px;
    margin-bottom: 8px;
  }
`;

export const SubTitle = styled.span`
  font-weight: 400;
  font-size: 30px;

  @media screen and (max-width: 480px) {
    font-size: 22px;
  }
`;

export const PriceValue = styled.span`
  font-weight: 700;
  font-size: 24px;
  margin: 12px 0;

  @media screen and (max-width: 480px) {
    font-size: 19px;
    margin: 5px 0;
  }
`;

export const RightContainer = styled.div`
  display: flex;

  @media screen and (max-width: 480px) {
    flex-direction: column-reverse;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 22px;
  justify-content: space-between;
  margin-right: 40px;

  @media screen and (max-width: 480px) {
    margin-right: 0;
    flex-direction: row;
    margin-top: 8px;
  }
`;

export const Plus = styled.div`
  width: 37px;
  height: 37px;
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
  margin: 32px 0;
`;

export const Minus = styled.div`
  width: 37px;
  height: 37px;
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
  height: 100%;
  width: 224px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  user-select: none;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ArrowContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  bottom: 0;
  width: 100%;
  z-index: 1;
`

export const Arrow = styled.div`
  width: 28px;
  height: 28px;
  margin: 6px;
  background-color: black;
  font-size: 30px;
  color: white;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${({direction}) => direction}: 0;
  z-index: 1;
  &:hover {
    opacity: 1;
  }
`;