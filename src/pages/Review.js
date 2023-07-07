import React, { useState } from "react";
import { getUnReviewList, patchUnReviewMenu } from "../api/fetch2";
import DatePicker from "react-datepicker";
import "../style/datepicker.css";
import Modal from "antd/es/modal/Modal";
import { Button, Checkbox, Form, Input, Radio } from "antd";

const Review = ({ reviewList }) => {
  const [unReview, setUnReveiw] = useState([]);
  // console.log(reviewList);
  const userId = JSON.parse(localStorage.getItem("user")).user_id;
  const [userName] = useState(
    JSON.parse(localStorage.getItem("user")).user_name,
  );
  // useEffect(() => {
  //   getUnReviewList(userId, setUnReveiw);
  // }, []);
  const tempStyle = {
    margin: 4,
    padding: "8px 16px",
    border: "1px dotted red",
    display: "flex",
    justifyContent: "space-between",
  };
  const [reviewMenuInfo, setReviewMenuInfo] = useState({});
  // patch 연결!!
  const handleEnterReview = _item => {
    showModal();
    console.log(_item);
    setReviewMenuInfo(_item);
    /*
    ipayment : 105
    menu: "솥솥"
    paymentAt : "2023-07-06" 
    */
  };
  // datepicker - 미등록 리스트 불러오기
  // const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleSendDate = () => {
    console.log("state 변수", selectedDate);
    if (!selectedDate) {
      alert("날짜를 입력해");
      return;
    } else {
      const year = selectedDate.getFullYear();
      // const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
      const month = selectedDate.getMonth() + 1;
      getUnReviewList(userId, setUnReveiw, year, month);
    }
  };

  // 모달 관련 state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    handleClearInput();
    console.log("전송");

    patchUnReviewMenu(
      userId,
      reviewMenuInfo,
      inputRestaurant,
      inputPrice,
      inputPoint,
      selectedDate,
      reviewMenuInfo.ipayment,
    );
  };
  const handleCancel = () => {
    // 입력했던 내용들 전체 삭제
    setIsModalOpen(false);
    handleClearInput();
    console.log("다시선택");
  };
  // 메뉴 후기 남기기
  const [inputRestaurant, setInputRestaurant] = useState("");
  const [inputPrice, setInputPrice] = useState(null);
  const [inputPoint, setInputPoint] = useState(null);
  const handleClearInput = () => {
    setInputRestaurant("");
    setInputPrice(null);
    setInputPoint(null);
  };
  const handleValueChange = e => {
    setInputRestaurant(e.target.value);
  };
  const handlePriceChange = e => {
    setInputPrice(e.target.value);
  };
  const handlePointChange = e => {
    setInputPoint(e.target.value);
    console.log(e.target.value);
  };

  // JSX
  return (
    <div>
      <p>{userName} 님의 Review 미등록 리스트</p>
      <hr />
      <DatePicker
        todayButton="이번달로"
        selected={selectedDate}
        minDate={new Date("2000-01-01")} // minDate 이전 날짜 선택 불가
        maxDate={new Date()} // maxDate 이후 날짜 선택 불가
        onChange={date => setSelectedDate(date)}
        dateFormat="yyyy-MM" // 월 선택 모드로 설정
        showMonthYearPicker // 월 선택 모드를 활성화
        isClearable
        placeholderText="날짜를 선택해주세요"
      />
      <br />
      <button onClick={handleSendDate}>날짜전달</button>
      <hr />
      {unReview.length === 0 ? (
        <p>리스트가 없어요</p>
      ) : (
        <div>
          <div
            style={{
              border: "1px solid coral",
              padding: 8,
              margin: "0 auto",
              width: "80%",
            }}
          >
            {unReview.map((item, index) => (
              <div style={tempStyle} key={index}>
                <span>{item.menu}</span>
                <span> {/* */} </span>
                <span>{item.paymentAt}</span>
                <button
                  onClick={() => handleEnterReview(item)}
                  style={{ border: "1px solid black" }}
                >
                  리뷰등록
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      <Modal
        title="리뷰를 등록해 보아요"
        open={isModalOpen}
        onOk={handleOk}
        okText="등록할래요"
        onCancel={handleCancel}
        cancelText="다시 생각해볼래요"
        centered
        closable={false}
        maskClosable={false}
      >
        <Input
          placeholder="식당"
          value={inputRestaurant}
          onChange={handleValueChange}
        />
        <Input
          type="number"
          placeholder="가격"
          value={inputPrice}
          onChange={handlePriceChange}
        />
        <Radio.Group
          name="reviewpoint"
          value={inputPoint}
          onChange={handlePointChange}
        >
          <Radio value={1}>1점</Radio>
          <Radio value={2}>2점</Radio>
          <Radio value={3}>3점</Radio>
        </Radio.Group> 
      </Modal>
    </div>
  );
};

export default Review;
