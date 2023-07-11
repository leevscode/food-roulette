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
