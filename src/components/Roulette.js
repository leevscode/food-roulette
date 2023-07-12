import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { Dimmed, RouletteBox } from "../style/MainCSS";
import Modal from "antd/es/modal/Modal";
import { useNavigate } from "react-router-dom";
import { postWinningMenu } from "../api/fetch2";

const Roulette = ({
  checkedList,
  searchedResult,
  monthLimitId,
  setReviewList,
}) => {
  console.log(checkedList);
  console.log(searchedResult);
  let winningMenu;
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
    winningMenu = data[prizeNumber].option;
    console.log("당첨메뉴 = ", winningMenu);

    let winningMenuData = searchedResult.filter(
      value => value.menu === winningMenu,
    );
    let winningMenuId = winningMenuData[0].imenu;
    console.log("filter result", winningMenuData);
    console.log("winning menu id = imenu", winningMenuId);

    postWinningMenu(winningMenuId, monthLimitId, setReviewList);
    navigate("/review");
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    console.log("다시선택");
  };
  const colorPalette = [
    "rgb(181,227,216)",
    "rgb(147,200,180)",
    "rgb(102,160,145)",
    "rgb(119,109,97)",
    "rgb(143 131 117)",
    "rgb(180,145,115)",
    "rgb(133,190,150)",
    "rgb(123,200,164)",
  ];

  // JSX
  return (
    <>
      {isSpinning ? <Dimmed /> : null}
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
          textColors={["#fefefe"]}
          fontSize={[21]}
          perpendicularText={[true]}
          backgroundColors={colorPalette}
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
        {!startSpin ? (
          `오늘의 결과는?`
        ) : (
          <>
            <span>룰렛이 돌아가고 있습니다... </span>
            <img
              src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1586271210/noticon/sageach1qrmmyfufwli1.gif"
              alt="돌아가고 있어요"
              width={30}
              height={30}
              style={{ display: "inline" }}
            />
          </>
        )}
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
          <p>{data[prizeNumber].option} 이(가) 나왔습니다!</p>
        </Modal>
      ) : null}
    </>
  );
};

export default Roulette;
