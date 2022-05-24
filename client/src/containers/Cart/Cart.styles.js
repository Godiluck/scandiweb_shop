import styled, {css} from "styled-components";

const emptyCartOuterContainer = css`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding-top: 32px;
`;

const cartOuterContainer = css`
  padding: 80px 240px 0 100px;

  @media screen and (max-width: 768px) {
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    padding: 80px 80px 0 100px;
  }
`;

export const OuterContainer = styled.div`
  transition: all 0.2s ease;
  min-height: 100vh;
  ${({emptyCart}) => emptyCart ? emptyCartOuterContainer : cartOuterContainer};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.span`
  margin-bottom: 60px;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`;

export const Hr = styled.hr`
  border: none;
  height: 1px;
  margin: 16px 0;
  background-color: #8d8f9a;
`;

export const CartItemContainer = styled.div``;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

export const TaxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 0;
`;

export const Tax = styled.span`
  font-weight: 500;
  font-size: 16px;
`;

export const TaxPrice = styled.span`
  font-weight: 700;
  font-size: 16px;
`;

export const QuantityContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 0;
`;

export const Quantity = styled.span`
  font-weight: 500;
  font-size: 16px;
`;

export const QuantityAmount = styled.span`
  font-weight: 700;
  font-size: 16px;
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 0;
`;

export const Total = styled.span`
  font-weight: 500;
  font-size: 16px;
`;

export const TotalPrice = styled.span`
  font-weight: 700;
  font-size: 16px;
`;

export const OrderButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const typeView = css`
  border: 1px solid black;
  background: white;
`;

const typeNotView = css`
  border: 1px solid white;
  background: #5ece7b;
`;

const typeCheck = css`
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
`;

const typeNotCheck = css`
  color: white;
  background: #5ece7b;
  border: 1px solid #5ece7b;
`;

export const OrderButton = styled.div`
  padding: 16px 48px;
  color: white;
  
  ${({type}) => (type === 'view' ? typeView : typeNotView)};
  
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
  
  &:hover{
    ${({type}) => (type === 'check' ? typeCheck : typeNotCheck)};
    cursor: pointer;
  }
  
  @media screen and (max-width: 480px) {
    padding: 16px 32px;
  }
`;

export const EmptyCartContainer = styled.div`
  width: 480px;
  height: 480px;

  @media screen and (max-width: 480px) {
    margin-top: 80px;
    width: 320px;
    height: 320px;
  }
`;

export const EmptyCart = styled.img`
  width: 100%;
  height: 100%;
`;