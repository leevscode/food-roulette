import React, { useEffect, useState } from "react";
import { getUnReviewList, patchUnReviewMenu } from "../api/fetch2";
import DatePicker from "react-datepicker";
import "../style/datepicker.css";

const Review = ({ reviewList }) => {
  const [unReview, setUnReveiw] = useState([]);
  // console.log(reviewList);
  const userId = JSON.parse(localStorage.getItem("user")).user_id;
  useEffect(() => {
    getUnReviewList(userId, setUnReveiw);
  }, []);
  const tempStyle = {
    margin: 4,
    padding: "8px 16px",
    border: "1px dotted red",
    display: "flex",
    justifyContent: "space-between",
  };
  const handleEnterReview = _item => {
    // patch 연결!!
    patchUnReviewMenu(userId);
    console.log(_item);
    /*
    ipayment : 105
    menu: "솥솥"
    paymentAt : "2023-07-06" 
    */
  };
  // datepicker
  const [selectedDate, setSelectedDate] = useState(null);
  const handleSendDate = () => {
    console.log("state 변수", selectedDate);
    if (!selectedDate) {
      alert("날짜를 입력해");
      return;
    }
  };
  // JSX
  return (
    <div>
      <p>Review 미등록 리스트</p>
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
      <button onClick={handleSendDate}>날짜전달</button>
      <hr />
      {unReview.length === 0 ? (
        "리스트가 없어요"
      ) : (
        <div>
          <p>리스트가 있어요</p>
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
    </div>
  );
};

export default Review;
