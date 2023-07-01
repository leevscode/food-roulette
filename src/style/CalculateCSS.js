import styled from "@emotion/styled";

export const CalculateBg = styled.div`
  margin: 0 auto;
  border-radius: 30px;
  width: 50%;
  height: auto;
  min-height: 755px;
  padding-bottom: 50px;
  background: aqua;
`;
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
  width: 230px; /* 막대기의 길이 */
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
  display: flex;
  position: relative;
  width: 100%;
`;

export const ProgressText = styled.p`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  margin-left: 22px;
  font-size: 16px;
  color: white;
  text-align: center;
  width: 100%;
`;
