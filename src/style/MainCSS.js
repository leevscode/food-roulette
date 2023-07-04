import styled from "@emotion/styled";

export const Dimmed = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  z-index: 99999;
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 20px;
  height: 100%;
`;

export const RouletteArea = styled.div`
  width: 600px;
  text-align: center;
`;

export const RouletteBox = styled.div`
  padding-top: 50px;
  & > div {
    display: inline-block;
    transform: rotate(-45deg);
    text-align: center;
  }
  & > button {
    display: block;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid black;
    margin: 0 auto;
  }
`;
