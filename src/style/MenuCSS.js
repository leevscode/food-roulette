import styled from "@emotion/styled";

export const HashTag = styled.div`
  display: inline-block;
  margin: 4px;
  padding: 2px 12px;
  border: 1px solid #e7e5e4;
  border-radius: 32px;
  background: white;
  &::before {
    content: "#";
    margin-right: 4px;
  }
  & > button {
    position: relative;
    top: -3px;
    width: 24px;
    height: 24px;
    margin-left: 4px;
    background-color: transparent;
    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 0;
      width: 2px;
      height: 16px;
      background-color: #474747;
      transform: rotate(45deg);
    }
    &::after {
      transform: rotate(-45deg);
    }
  }
`;

export const MenuContainer = styled.div`
  padding: 50px 32px;
  h1 {
    font-size: 42px;
    text-align: center;
    margin-bottom: 24px;
    mark {
      background: linear-gradient(180deg, white 60%, gold 40%);
    }
  }
  button {
    padding: 2px 8px;
    border-radius: 32px;
    background-color: #776d61;
    color: white;
    font-size: 20px;
  }
  /* button:hover {
    box-shadow: 2px 2px 4px 0px rgb(177 172 172 / 50%);
  } */
  .menu-area {
    display: flex;
    justify-content: space-between;
    padding: 0 48px;
    .menu {
      width: 80%;
      .menu-switch {
        padding-right: 8px;
        text-align: right;
      }
      hr {
        margin: 4px 0 16px 0;
      }
    }
  }
`;

export const MenuInputContainer = styled.div`
  position: relative;
  height: 600px;
  margin: 16px;
  padding: 32px 64px;
  border: 1px solid transparent;
  border-radius: 16px;
  background-color: rgba(127, 255, 212, 0.4);
  box-shadow: 2px 2px 4px 0px rgb(177 172 172 / 50%);
  .add-btn {
    margin-left: 8px;
    padding: 4px 12px;
    font-size: 20px;
    &:hover {
      box-shadow: 2px 2px 4px 0px rgb(177 172 172 / 50%);
    }
  }
  .how-input {
    font-size: 20px;
    color: red;
  }
  p {
    margin-top: 32px;
    margin-bottom: 8px;
    padding-left: 4px;
    font-size: 32px;
  }
  input {
    width: 86%;
    margin-bottom: 20px;
    padding: 4px 8px;
    border: 1px solid transparent;
    border-radius: 12px;
    box-shadow: 1px 1px 4px 0px rgb(177 172 172 / 50%);
    font-family: "omyu_pretty", "sans-serif";
    font-size: 24px;
  }
  button.save {
    position: absolute;
    right: 72px;
    bottom: 72px;
    padding: 4px 12px;
    font-size: 24px;
    &:hover {
      box-shadow: 2px 2px 4px 0px rgb(177 172 172 / 50%);
    }
  }
`;
export const MenuShowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  & > div {
    width: 50%;
  }
  .user-menu button {
    background-color: #776d61;
    color: white;
  }
  .menu-list > div {
    border: 1px solid #776d61;
    padding: 8px;
    background: #b5e3d8;
    // background: #776d61;
    max-height: 700px;
    overflow-y: scroll;
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
  }
`;
