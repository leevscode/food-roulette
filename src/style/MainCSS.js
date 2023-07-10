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
  padding: 60px 32px;
  height: 100%;
`;

export const UserAmountArea = styled.div`
  width: 25%;
  display: "flex";
  flex-direction: "column";
  justify-content: "space-between";
  & > div {
    width: 100%;
    height: 70%;
    background: url("/images/thinkbubble.png") no-repeat 50px;
    background-size: contain;
  }
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

export const SearchTagArea = styled.div`
  width: 25%;
  border: 1px solid blue;
  & > div {
    border-radius: 24px;
    padding: 16px;
  }
  .search-tag {
    border: 1px solid green;
    text-align: center;
    input {
      width: 100%;
    }
  }
  .search-result {
    border: 1px solid red;
    .check-area {
      p label {
        margin-left: 4px;
      }
    }
  }
`;
