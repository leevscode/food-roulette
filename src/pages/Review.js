import React, { useState } from "react";
import { getUnReviewList, patchUnReviewMenu } from "../api/fetch2";
import DatePicker from "react-datepicker";
import "../style/datepicker.css";
import Modal from "antd/es/modal/Modal";
import { Input, Radio } from "antd";
import { ReveiwContainer } from "../style/ReviewCSS";

const Review = () => {
  const [unReview, setUnReveiw] = useState([]);
  const userId = JSON.parse(localStorage.getItem("user")).user_id;
  const [userName] = useState(
    JSON.parse(localStorage.getItem("user")).user_name,
  );
  const [reviewMenuInfo, setReviewMenuInfo] = useState({});
  // patch 연결
  const handleEnterReview = _item => {
    showModal();
    setReviewMenuInfo(_item);
  };
  // datepicker
  const [selectedDate, setSelectedDate] = useState();
  const handleSendDate = async () => {
    console.log("state 변수", selectedDate);
    if (!selectedDate) {
      alert("날짜를 입력해주세요");
      return;
    } else {
      const year = selectedDate.getFullYear();
      // const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
      const month = selectedDate.getMonth() + 1;
      await getUnReviewList(userId, setUnReveiw, year, month);
    }
  };

  // 모달 관련 state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  // 리뷰 작성
  const handleOk = async () => {
    const regex = /^[1-9]\d*$/; // 숫자만 허용하는 정규표현식
    if (!inputPoint || !inputPrice || !inputRestaurant) {
      alert("값을 입력하세요");
      return;
    } else if (!regex.test(inputPrice)) {
      alert("정확한 금액을 입력하세요");
    } else {
      setIsModalOpen(false);
      handleClearInput();
      console.log("전송");

      const res = await patchUnReviewMenu(
        userId,
        reviewMenuInfo,
        inputRestaurant,
        inputPrice,
        inputPoint,
        selectedDate,
        reviewMenuInfo.ipayment,
      );
      const year = selectedDate.getFullYear();
      const month = selectedDate.getMonth() + 1;
      const loadList = await getUnReviewList(userId, setUnReveiw, year, month);
    }
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
    <ReveiwContainer>
      <h1>
        <mark>{userName}</mark>
        님의 Review 미등록 리스트
      </h1>
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
      <button className="search-btn" onClick={handleSendDate}>
        검색
      </button>
      <div className="unreview-list">
        {unReview.length === 0 ? (
          <p>리스트가 없어요</p>
        ) : (
          <>
            <div className="unreview-item unreview-index">
              <span>메뉴</span>
              <span className="idx">날짜</span>
              <span className="idx">등록</span>
            </div>
            {unReview.map((item, index) => (
              <div className="unreview-item" key={index}>
                <span>{item.menu}</span>
                <span>{item.paymentAt}</span>
                <button
                  className="review-btn"
                  onClick={() => handleEnterReview(item)}
                >
                  리뷰등록
                </button>
              </div>
            ))}
          </>
        )}
      </div>
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
    </ReveiwContainer>
  );
};

export default Review;
