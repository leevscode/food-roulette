import styled from "@emotion/styled";

export const ReveiwContainer = styled.div`
  padding: 50px 32px;
  text-align: center;
  h1 {
    font-size: 42px;
    text-align: center;
    margin-bottom: 24px;
    mark {
      background: linear-gradient(180deg, white 60%, gold 40%);
    }
  }
  hr {
    margin-bottom: 8px;
  }
  .search-btn,
  .review-btn {
    margin-left: 4px;
    border: 1px solid transparent;
    padding: 2px 8px;
    border-radius: 32px;
    background-color: #776d61;
    color: white;
    &:hover {
      background-color: #b5e3d8;
      color: black;
    }
  }
  .review-btn {
    padding: 3px 6px;
  }

  .unreview-list {
    width: 75%;
    margin: 16px auto;
    padding: 16px 32px;
    border: 1px solid transparent;
    border-radius: 16px;
    .unreview-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px;
      border-bottom: 1px solid #b5e3d8;
      &:first-of-type {
        margin-top: 0;
      }
      & > span:first-of-type {
        width: 50%;
      }
    }
    .unreview-index {
      padding: 8px 16px;
      background-color: #b5e3d8;
      /* color: white; */
      .idx {
        width: 10%;
        text-align: center;
      }
    }
  }
`;
