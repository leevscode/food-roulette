import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { RouletteBox } from "../style/MainCSS";

const Roulette = () => {
  // 룰렛데이터
  const [startSpin, setStartSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  // const [spinResult, setSpinResult] = useState("");

  const data = [
    { id: 1, option: 10 },
    { id: 2, option: 20 },
    { id: 3, option: 30 },
    { id: 4, option: 40 },
    { id: 5, option: 50 },
    { id: 6, option: 60 },
    { id: 7, option: 70 },
    { id: 8, option: 80 },
  ];

  const handleSpinRoulette = () => {
    if (isSpinning) {
      return; // 룰렛이 돌아가는 동안은 중복 클릭을 방지
    }
    // 0에서 data.length - 1 까지의 랜덤한 숫자 생성
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setStartSpin(true);
    setIsSpinning(true);
    // state는 비동기로 저장되어 실시간 반영이 안됨 - 추후 수정 필요
    // setSpinResult(data[prizeNumber].option);
  };

  // JSX
  return (
    <RouletteBox>
      <Wheel
        mustStartSpinning={startSpin}
        prizeNumber={prizeNumber}
        data={data}
        outerBorderColor={["#eee"]}
        outerBorderWidth={[5]}
        innerBorderColor={["#000"]}
        innerBorderWidth={[10]}
        radiusLineColor={["#dedede"]}
        radiusLineWidth={[2]}
        textColors={["#ffffff"]}
        fontSize={[30]}
        perpendicularText={[true]}
        backgroundColors={[
          "rgb(246,110,100)",
          "rgb(250,169,78)",
          "rgb(251,224,93)",
          "rgb(138,224,93)",
          "rgb(80,220,240)",
          "rgb(155,180,238)",
          "rgb(180,140,238)",
          "rgb(255,174,200)",
        ]}
        spinDuration={[0.5]}
        onStopSpinning={() => {
          setStartSpin(false);
          setIsSpinning(false);
        }}
        pointerProps={{
          src: "/images/pointer.png",
          style: {
            transform: "rotate(45.75deg) translateX(-6px) translateY(24px)",
          },
        }}
      />

      <button onClick={handleSpinRoulette} disabled={isSpinning}>
        SPIN
      </button>
      <br />
      {!startSpin
        ? `오늘의 결과는? ${data[prizeNumber].option}`
        : "룰렛이 돌아가고 있습니다..."}
    </RouletteBox>
  );
};

export default Roulette;
