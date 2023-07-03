import React, { useState, useEffect } from "react";
import { Wheel } from "react-custom-roulette";
import { RouletteBox } from "../style/MainCSS";
import Modal from "antd/es/modal/Modal";
import { useNavigate } from "react-router-dom";

const Roulette = ({ checkedList }) => {
  const navigate = useNavigate();
  // 룰렛데이터
  const [startSpin, setStartSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinResult, setSpinResult] = useState("");

  let data = checkedList.map((item, idx) => {
    return { id: idx + 1, option: item };
  });

  const handleSpinRoulette = () => {
    if (isSpinning) {
      return; // 룰렛이 돌아가는 동안은 중복 클릭을 방지
    }
    // 메뉴를 체크 안 했을 때도 룰렛 못 돌림
    if (checkedList[0] === "") {
      window.alert("메뉴를 선택해주세요!");
      return;
    }

    // 0에서 data.length - 1 까지의 랜덤한 숫자 생성
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setStartSpin(true);
    setPrizeNumber(newPrizeNumber);
    setIsSpinning(true);
    setSpinResult(data[prizeNumber].option);
    showModal();
  };

  // 모달 관련 state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    console.log(spinResult);
    console.log(data[prizeNumber].option);
    navigate("/calendar");
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    console.log("다시선택");
  };

  // JSX
  return (
    <>
      <RouletteBox>
        <Wheel
          mustStartSpinning={startSpin}
          prizeNumber={prizeNumber}
          data={data}
          outerBorderColor={["#eee"]}
          outerBorderWidth={[5]}
          innerBorderColor={["#323232"]}
          innerBorderWidth={[8]}
          radiusLineColor={["transparent"]}
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
        {!startSpin ? `오늘의 결과는?` : "룰렛이 돌아가고 있습니다..."}
      </RouletteBox>
      {!startSpin ? (
        <Modal
          open={isModalOpen}
          onOk={handleOk}
          okText="이걸로 할게요"
          onCancel={handleCancel}
          cancelText="다시 돌릴래요"
          centered
          closable={false}
          maskClosable={false}
        >
          <p>{data[prizeNumber].option}</p>
        </Modal>
      ) : null}
    </>
  );
};

export default Roulette;
