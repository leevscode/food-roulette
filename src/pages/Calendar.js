import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { Radio } from "antd";
import "../style/Calendar.css";
import { getCalendar } from "../api/fetch";

const Schedule = () => {
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [scheduleData, setScheduleData] = useState([]);

  const getCalendarLoad = async () => {
    try {
      const data = await getCalendar(1, 6, 23);
      setScheduleData(data);
    } catch (err) {
      console.log(err);
    }
  };

  const onClickSetSchedule = _result => {
    setSelectedSchedule(_result);
  };

  useEffect(() => {
    getCalendarLoad();
  }, []);

  const titleContentShow = ({ date }) => {
    const day = moment(date).format("YYYY-MM-DD");
    const result = scheduleData.find(item => item.paymentAt === day);
    if (result) {
      return (
        <div
          className="schedule-box"
          style={{ backgroundColor: "#7FFFD4" }}
          onClick={e => {
            e.stopPropagation();
            onClickSetSchedule(result);
          }}
        >
          <div className="empty-space" />
          <div>{result.total}</div>
        </div>
      );
    } else {
      return (
        <div
          onClick={e => {
            e.stopPropagation();
            onClickSetSchedule({});
          }}
        >
          자료가 없습니다.
        </div>
      );
    }
  };

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
  const [price, setPrice] = useState(0);
  const [place, setPlace] = useState("");
  const [point, setPoint] = useState(0);
  const onChangePrice = e => {
    // console.log(e.target.value);
    setPrice(e.target.value);
  };
  const onChangePlace = e => {
    // console.log(e.target.value);
    setPlace(e.target.value);
  };
  const onChangePoint = e => {
    // console.log(e.target.value);
    setPoint(e.target.value);
  };
  const onCalc = () => {
    const totalPrice = selectedSchedule.total + parseInt(price);
    const newArr = scheduleData.map(item => {
      if (item.paymentAt === selectedSchedule.paymentAt) {
        item.total = totalPrice;
      }
      return item;
    });
    setScheduleData(newArr);
  };

  const isMonthLabelDisabled = ({ date }) => {
    // 클릭 이벤트를 막을 조건을 확인하고 true 또는 false를 반환합니다.
    // 예를 들어, 월 출력 부분을 클릭할 때마다 항상 클릭을 막고 싶다면
    // 항상 true를 반환하면 됩니다.
    return true;
  };
  const minDate = new Date(2010, 0, 1); // 1990년 1월 1일
  const maxDate = new Date(2100, 11, 31); // 2100년 12월 31일

  return (
    <>
      <div className="p-6 mt-5 bg-white flex justify-center gap-7">
        <div>
          <h1>Calendar</h1>
          <div style={{ border: "1px solid" }}>
            <Calendar
              minDate={minDate}
              maxDate={maxDate}
              onClickDay={handleClickDay}
              calendarType="US"
              formatDay={(locale, date) => moment(date).format("D")}
              tileContent={titleContentShow}
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
                <p>{selectedSchedule.paymentAt}</p>
                <br />
              </div>
              <div>
                <form onSubmit={onSubmitForm}>
                  <div className="calendar-scroll">
                    {[...Array(1)].map((_, index) => (
                      <div className="calendar-info" key={index}>
                        <h2>{selectedSchedule.title}</h2>
                        <p className="food-name">{selectedSchedule.price}</p>
                        <div className="calendar-input">
                          <input
                            type="text"
                            placeholder="가격을 입력해주세요"
                            name="price"
                            onChange={onChangePrice}
                          ></input>
                        </div>
                        <div className="calendar-input">
                          <input
                            type="text"
                            placeholder="장소를 입력해주세요"
                            name="place"
                            onChange={onChangePlace}
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
                        <Radio.Group
                          className="pepe-score-raido"
                          name="point"
                          onChange={onChangePoint}
                        >
                          <Radio value={1}>1점</Radio>
                          <Radio value={2}>2점</Radio>
                          <Radio value={3}>3점</Radio>
                        </Radio.Group>
                      </div>
                    ))}
                  </div>
                  <div className="calendar-bt">
                    <button className="calendar-button" onClick={onCalc}>
                      입력
                    </button>
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
