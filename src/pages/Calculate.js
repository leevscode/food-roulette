import React, { useEffect, useState } from "react";
import { Limit, ProgressContainer, ProgressFill, ProgressFillInner, ProgressText } from "../style/CalculateCSS";
import ShowMonth from "../components/ShowMonth";


// useState 훅을 사용하여 remainingBalance 상태를 관리하고, 
// 초기값으로 500000을 설정. 
// progressPercent 상태도 useState 훅을 이용해 관리
// 계산 로직은 별도의 함수인 calculateProgress 내부에 구현됨
// useEffect 훅을 사용하여 remainingBalance 또는 
// totalBalance 값이 변경될 때마다 이 함수를 호출
// 이를 통해 진행 상태의 백분율이 적절하게 업데이트되도록 한다
const Calculate = () => {
  const [remainingBalance, setRemainingBalance] = useState(400000);
  const totalBalance = 500000;
  const [progressPercent, setProgressPercent] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const percent = (remainingBalance / totalBalance) * 100;
      setProgressPercent(percent);
    };

    calculateProgress();
  }, [remainingBalance, totalBalance]);

  return (
    <>
      <Limit>
        <h1>이달의 한도</h1>
        <ProgressContainer>
          <ProgressFill style={{ width: `${progressPercent}%` }}>
            <ProgressFillInner></ProgressFillInner>
          </ProgressFill>
        </ProgressContainer>
      </Limit>
      <div style={{ textAlign: "center", display: "flex", justifyContent: "center" }}>
        <ShowMonth />
      </div>
    </>
  );
};

export default Calculate;
