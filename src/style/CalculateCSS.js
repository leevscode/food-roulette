import styled from "@emotion/styled";

export const CalculateChartText = styled.p`
  z-index: 999;
`;

export const CalculateBg = styled.div`
  position: relative;
  color: white;
  margin: 0 auto;
  width: 750px;
  height: auto;
  min-height: 790px;
  max-height: 790px;
  padding-bottom: 50px;
  background-image: url("./images/chartinfo.png");
  background-size: cover;
  background-position: -26px;
  z-index: 5;
`;

export const Backgroundimg = styled.div`
  display: flex;
  position: absolute;
  margin: 0 auto;
  justify-content: center;
  background-image: url("images/chart.jpg");
  background-repeat: no-repeat;
  background-size: 100% 85%;
  background-position: center;
  align-items: center;
  top: 15%;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.4;
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
  background-color: #7fffd4;
  border-radius: 5px;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const ProgressFill = styled.div`
  height: 100%;
  background-color: #59b2a2;
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
  font-size: 16px;
  color: black;
  text-align: center;
  width: 100%;
`;
