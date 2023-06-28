import styled from "@emotion/styled";

export const Box = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("/images/title.png") no-repeat center;
  background-size: cover;
`;

export const TitleBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #282c34;
  opacity: 0.8;
  min-height: 100vh;
  color: white;
  z-index: 99999;
`;

export const TextBox = styled.div`
  padding: 50px 100px;
  background: #3e8e41;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 1;
`;

export const Logo = styled.div`
  width: 350px;
  height: 150px;
  background: url("/images/logo.svg") no-repeat center;
  background-size: contain;
`;

export const TitleInput = styled.input`
  display: flex;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  background-color: #f2f2f2;
  color: #333333;
  padding: 10px;
  margin-top: 20px;
  border: 1px solid #333333;
  & :hover {
    background-color: #eaeaea;
  }
`;

export const TitleButton = styled.button`
  margin-top: 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  background-color: #4caf50;
  color: white;
  border-radius: 8px;
  padding: 8px 20px;
  margin-top: 4px;
  &:hover {
    background-color: #45a049;
    &:active {
      background-color: #3e8e41;
    }
    @keyframes fade {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;
