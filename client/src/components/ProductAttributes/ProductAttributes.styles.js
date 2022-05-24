import styled, {css} from "styled-components";

export const AttributesDiv = styled.div``;
export const AttributeValue = styled.span``;

export const Attributes = styled.div`
  margin: 8px 0;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 0 16px;
  }
`;

const typeMiniCartAttributeName = css`
  font-weight: 500;
  font-size: 15px;
  margin-top: 16px;
`;

export const AttributeName = styled.span`
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
  font-size: 18px;
  margin-top: 27px;
  ${({type}) => type === 'miniCart' && typeMiniCartAttributeName}
`;

export const AttributeOuterDiv = styled.div`
  display: flex;
  
  @media screen and (max-width: 480px) {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 16px;
  }
`;

const typeMiniCartSwatch = css`
  width: 32px;
  height: 22px;
  margin: 4px 6px 4px 0;
`;

const typeSingleProductSwatch = css`
  &:hover{
    cursor: pointer;
  }
`;

const activeSwatch = css`
  opacity: 0.2;
`;

export const AttributeSwatchDiv = styled.div`
  width: 63px;
  height: 45px;
  margin: 8px 12px 8px 0;
  border: 1px solid #8d8f9a;
  
  background-color: ${({colorHex}) => colorHex};
  transition: all 0.3s ease;
  
  ${({type}) => type === 'miniCart' && typeMiniCartSwatch};
  
  ${({type}) => type === 'singleProduct' && typeSingleProductSwatch};
  
  ${({active}) => active && activeSwatch};
`;

const typeMiniCartInnerDiv = css`
  margin: 4px 6px 4px 0;
  padding: 6px 11px;
`;

const typeSingleProductInnerDiv = css`
  &:hover{
    cursor: pointer;
  }
`;

const activeInnerDiv = css`
  color: white;
  background-color: black;
`;

export const AttributeInnerDiv = styled.div`
  margin: 8px 12px 8px 0;
  padding: 13px 22px;
  border: 1px solid black;
  transition: all 0.3s ease;
  
  ${({type}) => type === 'miniCart' && typeMiniCartInnerDiv}
  ${({type}) => type === 'singleProduct' && typeSingleProductInnerDiv}
  ${({active}) => active && activeInnerDiv}
`;