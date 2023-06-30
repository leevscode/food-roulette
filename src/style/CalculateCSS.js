import styled from "@emotion/styled";

export const Limit = styled.div`
  display: flex;
  font-size: 50px;
  width: 100%;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ProgressContainer = styled.div`
  width: 200px; /* 막대기의 길이를 조정하세요 */
  height: 30px;
  background-color: #e5e5e5;
  border-radius: 5px;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const ProgressFill = styled.div`
  height: 100%;
  background-color: red;
  border-radius: 5px;
`;

export const ProgressFillInner = styled.div`
  width: 100%;
`;

export const ProgressText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #ffffff;
  text-align: center;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;