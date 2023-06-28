import styled from "@emotion/styled";

export const NotFoundPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("images/404.png") no-repeat center;
  background-size: cover;
`;

export const NotFoundText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #282c34;
  opacity: 0.9;
  min-height: 100vh;
  color: white;
`;

export const NotFoundButton = styled.button`
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
  }
`;
