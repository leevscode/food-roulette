import styled from "@emotion/styled";

export const ReveiwContainer = styled.div`
  padding: 50px 32px;
  text-align: center;
  h1 {
    font-size: 42px;
    text-align: center;
    margin-bottom: 24px;
  }
  hr {
    margin-bottom: 8px;
  }
  .search-btn {
    margin-left: 4px;
    border: 1px solid black;
  }

  .unreview-list {
    width: 75%;
    margin: 16px auto;
    padding: 16px;
    border: 1px solid coral;
    border-radius: 16px;
    .unreview-item {
      margin-top: 16px;
      padding: 8px 16px;
      border: 1px solid red;
      display: flex;
      justify-content: space-between;
      &:first-of-type {
        margin-top: 0;
      }
      & > span:first-of-type {
        width: 50%;
      }
    }
  }
`;
