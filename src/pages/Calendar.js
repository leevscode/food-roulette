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
      imgPath:
        "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1644161402/noticon/byp14ppjklohyym0dl6z.png",
    },
    {
      day: "2023-06-16",
      price: 10000,
    },
    {
      day: "2023-06-05",
      price: 7500,
    },
    {
      day: "2023-06-28",
      price: 15000,
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
      <div className="p-6 mt-5 shadow rounded bg-white flex justify-center gap-7">
        <div className="CalendarWarp">
          <h1>Calendar</h1>
          <Calendar
            onClickDay={handleClickDay}
            calendarType="US"
            formatDay={(locale, date) => moment(date).format("D")}
            tileContent={showScheduleJSX}
          />
        </div>
        {selectedSchedule && (
          <>
          <div className="SelectedSchedule">
            <p>{selectedSchedule.day}</p>
            <br/>
            <h2>{selectedSchedule.title}</h2>
            <p className="food-name">{selectedSchedule.price}</p>
            <form className="calendar-input">
              <input type="text"  placeholder="가격을 입력해주세요" ></input>
            </form>
            <form className="calendar-input">
              <input type="text"  placeholder="장소를 입력해주세요"></input>
            </form>
            <br />
            <img src={selectedSchedule.imgPath} alt="테스트" />
          <button className="calendar-button">입력</button>
          </div>
          </>
        )}
      </div>
    </>
  );
};

export default Schedule;
