import styled from "styled-components";

export const AppContainer = styled.div`
font-family: "Raleway", sans-serif;
  position: relative;
  min-height: 100vh;
`;

export const DarkBackground = styled.div`
position: absolute;
  top: -10px;
  right: -20px;
  width: 110%;
  height: 110%;
  overflow: hidden;
  z-index: 2;
  background: rgba(57, 55, 72, 0.22);
`;