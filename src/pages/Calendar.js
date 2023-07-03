import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { Radio } from "antd";
import "../style/Calendar.css";

const Schedule = () => {
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    // 서버에서 받아오는 axios 데이터 샘플
    const server = [
      {
        day: "2023-07-02",
        title: "햄버거",
        // price: 4000,
      },
      {
        day: "2023-07-03",
        title: "피자",
        // price: 10000,
      },
      {
        day: "2023-06-05",
        title: "샤브샤브",
        // price: 7500,
      },
      {
        day: "2023-06-28",
        title: "돈까스",
        // price: 15000,
      },
    ];

    setScheduleData(server);
  }, []);

  const handleClickDay = value => {
    const day = moment(value).format("YYYY-MM-DD");
    const result = scheduleData.find(item => item.day === day);
    setSelectedSchedule(result);
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
          <div style={{ border: "1px solid" }}>
            <Calendar
              onClickDay={handleClickDay}
              calendarType="US"
              formatDay={(locale, date) => moment(date).format("D")}
              tileContent={({ date }) => {
                const day = moment(date).format("YYYY-MM-DD");
                const result = scheduleData.find(item => item.day === day);

                if (result) {
                  return (
                    <div
                      className="schedule-box"
                      style={{ backgroundColor: "#7FFFD4" }}
                      onClick={() => setSelectedSchedule(result)}
                    >
                      <div className="empty-space" />
                      <div>{result.title}</div>
                      {/* <div>{result.price}</div> */}
                    </div>
                  );
                }
              }}
            />
          </div>
        </div>

        <div className="calendar-menubox">
          <p className="calendar-menutext">
            날짜를 <br /> 선택해주세요!
          </p>

          {selectedSchedule && (
            <div className="selected-schedule">
              <div>
                <p>{selectedSchedule.day}</p>
                <br />
              </div>
              <div>
                <form onSubmit={onSubmitForm}>
                  <div className="calendar-scroll">
                    {[...Array(3)].map((_, index) => (
                      <div className="calendar-info" key={index}>
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
                        <h2>페페 스코어</h2>
                        {/* <img src={selectedSchedule.imgPath} alt="테스트" /> */}
                        <div className="pepe-score">
                          <img src="/images/1점.png" alt="울음" />
                          <img src="/images/2점.png" alt="무난" />
                          <img src="/images/3점.png" alt="행복" />
                        </div>
                        <Radio.Group className="pepe-score-raido">
                          <Radio value={1}>1점</Radio>
                          <Radio value={2}>2점</Radio>
                          <Radio value={3}>3점</Radio>
                        </Radio.Group>
                      </div>
                    ))}
                  </div>
                  <div className="calendar-bt">
                    <button className="calendar-button">입력</button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Schedule;
