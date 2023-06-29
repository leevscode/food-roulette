import styled from "@emotion/styled";

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 20px;
  height: 100%;
`;

export const RouletteArea = styled.div`
  width: 600px;
`;

export const RouletteBox = styled.div`
  & > div {
    display: inline-block;
    transform: rotate(-45deg);
  }
`;
