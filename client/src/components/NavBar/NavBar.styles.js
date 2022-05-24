import styled, {css} from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;

  @media screen and (max-width: 768px) {
    padding: 0 32px;
  }
`

export const Left = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
export const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const activeCategoryStyles = css`
  color: #5ece7b;
  padding-bottom: 26px;
  border-bottom: 2px solid #5ece7b;

  @media screen and (max-width: 480px) {
    padding-bottom: 13px;
    border-bottom: 1px solid #5ece7b;
  }
`

export const Button = styled.div`
  height: 100%;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  font-family: 'Raleway', sans-serif;
  padding: 28px 8px;
  margin-right: 24px;

  &:hover {
    cursor: pointer;
  }

   ${({active, currentCategory}) => active === currentCategory && activeCategoryStyles};

  @media screen and (max-width: 480px) {
    margin-right: 5px;
    padding: 14px 4px;
    font-size: 8px;
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    margin-right: 12px;
  }
`;

export const Logo = styled.img`
  @media screen and (max-width: 480px) {
    width: 24px;
    height: 24px;
  }
`;

export const CurrencyButton = styled.div`
  display: flex;
  align-items: center;
  margin-left: 22px;
  &:hover{
    cursor: pointer;
  }
  
  @media screen and (max-width: 480px) {
    margin-left: 12px;
  }
`;

export const Currency = styled.span`
  font-weight: 500;
  font-size: 18px;
  
  @media screen and (max-width: 480px) {
    font-size: 9px;
  }
`;

export const CurrencyArrow = styled.img`
  margin-left: 10px;
  
  @media screen and (max-width: 480px) {
    margin-left: 5px;
  }
`;

export const CartButtonDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  @media screen and (max-width: 480px) {
    width: 14px;
    height: 14px;
  }
`;

export const CartButton = styled.img`
  margin-left: 22px;
  &:hover{
    cursor: pointer;
  }
  
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
    margin-left: 13px;
  }
`;

export const CartButtonBadgeDiv = styled.div`
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -8px;
  left: -13px;
  border-radius: 50%;
  background: black;
  
  @media screen and (max-width: 480px) {
    width: 10px;
    height: 10px;
    
    top: -4px;
    left: -11px;
  }
`;

export const CartButtonBadge = styled.div`
  color: white;
  font-family: var(--font-roboto);
  font-weight: 700;
  font-size: 14px;
  
  @media screen and (max-width: 480px) {
    font-size: 7px;
  }
`;