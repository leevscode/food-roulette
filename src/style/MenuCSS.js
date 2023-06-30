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
