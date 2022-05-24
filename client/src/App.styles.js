import styled from "styled-components";

export const AppContainer = styled.div`
font-family: "Raleway", sans-serif;
  position: relative;
  min-height: 100vh;
`;

export const DarkBackground = styled.div`
position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: rgba(57, 55, 72, 0.22);
`;