import moment from "moment/moment";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "../style/Calendar.css";

const Schedule = () => {
  const [selectedSchedule, setSelectedSchedule] = useState(null);

  const 서버정보 = [
    {
      day: "2023-06-20",
      title: "떡볶이",
      price: 5000,
      imgPath:
        "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1644161402/noticon/byp14ppjklohyym0dl6z.png",
    },
    {
      day: "2023-06-16",
      title: "짜장면",
      price: 10000,
    },
    {
      day: "2023-06-05",
      title: "햄버거",
      price: 7500,
    },
  ];

  const handleClickDay = value => {
    const 날짜 = moment(value).format("YYYY-MM-DD");
    const result = 서버정보.find(item => item.day === 날짜);
    setSelectedSchedule(result);
  };

  const showScheduleJSX = ({ date }) => {
    const 날짜 = moment(date).format("YYYY-MM-DD");
    const result = 서버정보.find(item => item.day === 날짜);

    if (result) {
      return (
        <div
          className="schedule-box"
          onClick={() => setSelectedSchedule(result)}
        >
          <div>{result.title}</div>
          <div>{result.price}</div>
          <div></div>
        </div>
      );
    }
  };

  return (
    <>
      <div className="p-6 mt-5 shadow rounded bg-white flex">
        <div className="CalendarWarp">
          <h1>캘린더</h1>
          <Calendar
            onClickDay={handleClickDay}
            calendarType="US"
            tileContent={showScheduleJSX}
          />
        </div>
        {selectedSchedule && (
          <div className="SelectedSchedule">
            <div>날짜</div>
            <h2>{selectedSchedule.title}</h2>
            <p>{selectedSchedule.price}</p>
            <form>
              <input type="text"></input>
              <input type="text"></input>
            </form>

            <img src={selectedSchedule.imgPath} alt="테스트" />
          </div>
        )}
      </div>
    </>
  );
};

export default Schedule;
