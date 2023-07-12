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
  padding: 50px 32px;
  height: 100%;
`;

export const UserAmountArea = styled.div`
  width: 320px;
  margin-top: 50px;
  .bubble {
    width: 100%;
    height: 100px;
    padding: 25px;
    background: url("/images/thinkbubble.png") no-repeat center;
    background-size: 380px 100px;
  }
  .answer {
    padding-left: 70px;
  }
  .answera {
    padding-left: 27px;
    font-size: 22px;
  }
  .question {
    padding-left: 96px;
    background: url("/images/thinkbubblea.png") no-repeat center;
    background-size: 380px 100px;
  }
`;

export const RouletteArea = styled.div`
  width: 600px;
  text-align: center;
  h1 {
    font-size: 32px;
  }
  button {
    border: 1px solid transparent;
    border-radius: 32px;
    background-color: #b5e3d8;
    color: black;
    &:hover {
      background-color: #776d61;
      color: white;
    }
  }
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
    margin: 0 auto;
  }
`;

export const SearchTagArea = styled.div`
  width: 25%;
  margin-top: 50px;
  & > div {
    border-radius: 24px;
    padding: 16px 20px;
  }
  button {
    background-color: #776d61;
    color: white;
    border-radius: 20px;
    padding: 2px 9px;
  }
  .hash-tag {
    background-color: transparent;
  }
  .how-search {
    color: red;
    font-size: 16px;
  }
  .search-tag {
    border: 1px solid transparent;
    background-color: rgba(127, 255, 212, 0.4);
    text-align: center;
    input {
      width: 100%;
      padding: 4px 8px;
      border: 1px solid transparent;
      border-radius: 16px;
      box-shadow: 1px 1px 4px 0px rgb(177 172 172 / 50%);
    }
  }
  .search-result {
    margin-top: 24px;
    border: 1px solid transparent;
    background-color: #b5e3d8;
    h3 {
      font-size: 28px;
    }
    .check-area {
      margin-bottom: 8px;
      max-height: 500px;
      overflow-y: auto;
      &::-webkit-scrollbar {
        width: 10px;
      }
      &::-webkit-scrollbar-track {
        background-color: #776d61;
        border-radius: 20px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #7fffd4;
        border-radius: 20px;
      }
      input {
        accent-color: #776d61;
      }
      p label {
        margin-left: 4px;
        cursor: pointer;
      }
    }
    .result {
      display: flex;
      justify-content: space-between;
    }
  }
`;
