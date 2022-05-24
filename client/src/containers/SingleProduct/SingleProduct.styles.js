import styled from "styled-components";

export const OuterContainer = styled.div`
  max-width: 100%;
  height: 100vh;
  padding: 52px 96px 26px;
  transition: all 0.2s ease;

  @media screen and (max-width: 480px) {
    padding: 32px 0;
  }

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    padding: 48px 32px;
  }

  @media screen and (min-width: 1920px) {
    padding: 96px;
  }
`;

export const Container = styled.div`
  display: flex;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    flex-direction: column-reverse;
  }
`;

export const SecondaryImageOuterContainer = styled.div`
  @media screen and (max-width: 480px) {
    margin: 16px 0;
    overflow: scroll;
  }

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    width: 160px;
    overflow: scroll;
  }
`;

export const SecondaryImageInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 104px;
  height: 104px;

  @media screen and (max-width: 480px) {
    flex-direction: row;
  }
`;

export const SecondaryImage = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  object-fit: contain;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    margin: 0 16px;
  }
`;

export const PrimaryImageContainer = styled.div`
  width: 672px;
  height: 512px;
  margin: 0 80px 0 32px;

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 256px;
    margin: 8px 0;
  }

  @media screen and (min-width: 1920px) {
    margin-left: 64px;
  }
`;

export const PrimaryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (max-width: 1024px) {
    justify-content: center;
    align-items: center;
    margin: 32px 0;
  }

  @media screen and (min-width: 1920px) {
    margin-left: 64px;
  }
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 29px;
`;

export const SubTitle = styled.span`
  font-weight: 400;
  font-size: 29px;
  margin: 16px 0;
`;

export const Price = styled.span`
  font-family: "Roboto Condenced", sans-serif;
  font-weight: 700;
  font-size: 18px;
  margin: 40px 0 10px 0;
`;

export const PriceValue = styled.span`
  font-weight: 700;
  font-size: 24px;
`;

export const AddCartContainer = styled.div`
  max-width: 292px;
  padding: 16px 32px;
  margin: 20px 10px 40px 0;
  border: 1px solid #5ece7b;
  background-color: #5ece7b;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    background-color: white;
    color: #5ece7b;
  }
`;

export const AddCart = styled.span``;

export const OutOfStockContainer = styled.div`
  max-width: 292px;
  padding: 16px 32px;
  margin: 20px 0 40px 0;
  border: 1px solid #8d8f9a;
  background-color: #8d8f9a;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
`;

export const OutOfStock = styled.span``;

export const Desc = styled.div`
  @media screen and (max-width: 480px) {
    margin: 0 16px;
  }
`;

export const FullDesc = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 16px;
`;