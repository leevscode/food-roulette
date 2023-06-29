import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "../style/Calendar.css";

const Schedule = () => {
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    // 서버에서 받아오는 axios 데이터 샘플
    const server = [
      {
        day: "2023-06-20",
        title: "떡볶이",
        price: 4000,
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
      {
        day: "2023-06-28",
        price: 15000,
        title: "피자",
      },
    ];

    setScheduleData(server);
  }, []);

  const handleClickDay = value => {
    const day = moment(value).format("YYYY-MM-DD");
    const result = scheduleData.find(item => item.day === day);
    setSelectedSchedule(result);
  };

  const showScheduleJSX = ({ date }) => {
    const day = moment(date).format("YYYY-MM-DD");
    const result = scheduleData.find(item => item.day === day);

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

  const onSubmitForm = e => {
    e.preventDefault();
    // 서버연동 예정
    console.log(e.target);
  };

  return (
    <>
      <div className="p-6 mt-5 bg-white flex justify-center gap-7">
        <div>
          <h1>Calendar</h1>
          <Calendar
            onClickDay={handleClickDay}
            calendarType="US"
            formatDay={(locale, date) => moment(date).format("D")}
            tileContent={showScheduleJSX}
          />
        </div>

        <div className="calendar-menubox">
          <p className="calendar-menutext">
            날짜를 <br /> 선택해주세요!
          </p>

          {selectedSchedule && (
            <>
              <div className="selected-schedule">
                <div>
                  <p>{selectedSchedule.day}</p>
                  <br />
                </div>
                <div>
                  <form onSubmit={onSubmitForm}>
                    <h2>{selectedSchedule.title}</h2>
                    <p className="food-name">{selectedSchedule.price}</p>
                    <div className="calendar-input">
                      <input
                        type="text"
                        placeholder="가격을 입력해주세요"
                      ></input>
                    </div>
                    <div className="calendar-input">
                      <input
                        type="text"
                        placeholder="장소를 입력해주세요"
                      ></input>
                    </div>
                    <br />
                    <img src={selectedSchedule.imgPath} alt="테스트" />

                    <div className="calendar-bt">
                      <button className="calendar-button">입력</button>
                    </div>
                  </form>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Schedule;