import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { RouletteBox } from "../style/MainCSS";

const Roulette = () => {
  // 룰렛데이터
  const [startSpin, setStartSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const data = [
    { id: 1, option: 10 },
    { id: 2, option: -30 },
    { id: 3, option: 50 },
    { id: 4, option: 30 },
    { id: 5, option: 40 },
    { id: 6, option: 20 },
    { id: 7, option: 40 },
    { id: 8, option: 20 },
  ];

  // JSX
  return (
    <RouletteBox>
      <h1>Rotate Roulette!</h1>
      <hr />
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
        }}
        pointerProps={{
          src: "/images/pointer.png",
          style: {
            transform: "rotate(45.75deg) translateX(-6px) translateY(24px)",
          },
        }}
      />
    </RouletteBox>
  );
};

export default Roulette;
