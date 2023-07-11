import React, { useEffect, useState } from "react";
import {
  // Backgroundimg,
  Limit,
  ProgressContainer,
  ProgressFill,
  ProgressFillInner,
  ProgressText,
  CalculateBg,
} from "../style/CalculateCSS";
import ShowMonth from "../components/ShowMonth";
import { getCalculate } from "../api/fetch3";

// useState 훅을 사용하여 remainingBalance 상태를 관리하고,
// 초기값으로 500000을 설정.
// progressPercent 상태도 useState 이용해 관리
// 계산은 별도의 함수인 calculateProgress 내부에 구현됨
// useEffect 훅을 사용하여 remainingBalance 또는
// totalBalance 값이 변경될 때마다 이 함수를 호출
// 이를 통해 진행 상태의 백분율이 적절하게 업데이트되도록 한다
// 추가 코드 진행 완료함.
const Calculate = () => {
  const userId = JSON.parse(localStorage.getItem("user")).user_id;
  const [monthData, setMonthData] = useState({});

  const [month, setMonth] = useState(7);

  const getCalculateData = async () => {
    const data = await getCalculate(userId, month, 2023, setMonthData);
    calculateProgress(data);
  };
  useEffect(() => {
    getCalculateData();
  }, [month]);

  const calculateProgress = _data => {
    console.log("프로그래스 데이터 : ", _data);
    if (!_data.management) {
      setProgressPercent(100);
      return;
    } else {
      const percent = Math.floor(
        (_data.management.balance / _data.management.monthLimit) * 100,
      );
      setProgressPercent(percent);
      setMonthData(_data);
    }
  };

  const [totalBalance, setTotalBalance] = useState(0);
  const [remainingBalance, setRemainingBalance] = useState(0);
  const [progressPercent, setProgressPercent] = useState(0);

  return (
    <CalculateBg>
      <>
        <Limit>
          <h1>이달의 한도</h1>
          <ProgressContainer>
            <ProgressFill style={{ width: `${progressPercent}%` }}>
              <ProgressText>{progressPercent && progressPercent}%</ProgressText>
              <ProgressFillInner></ProgressFillInner>
            </ProgressFill>
          </ProgressContainer>
        </Limit>
        <br />
        <ShowMonth setMonth={setMonth} />
      </>
    </CalculateBg>
  );
};

export default Calculate;
