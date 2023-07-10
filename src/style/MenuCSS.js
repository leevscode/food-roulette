import styled from "@emotion/styled";

export const HashTag = styled.div`
  display: inline-block;
  margin: 4px;
  padding: 3px 12px;
  border: 1px dotted red;
  border-radius: 20px;
  &::before {
    content: "#";
    margin-right: 4px;
  }
  & > button {
    margin-left: 4px;
    &::before {
      content: "X";
    }
  }
`;

export const MenuContainer = styled.div`
  padding: 50px 32px;
  h1 {
    font-size: 42px;
    text-align: center;
    margin-bottom: 24px;
  }
  .menu-area {
    display: flex;
    justify-content: space-between;
    padding: 0 48px;
    .menu {
      width: 75%;
      .menu-switch {
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
  border: 1px solid red;
  border-radius: 16px;
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
    width: 600px;
    margin-bottom: 20px;
    padding: 4px 8px;
    border: 1px solid black;
    border-radius: 12px;
    font-family: "omyu_pretty", "sans-serif";
    font-size: 24px;
  }
  button.save {
    position: absolute;
    right: 72px;
    bottom: 72px;
  }
`;
export const MenuShowContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
