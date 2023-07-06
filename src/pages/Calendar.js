import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { Radio } from "antd";
import "../style/Calendar.css";
import { getCalendar } from "../api/fetch";
import { getCalendarDetail } from "../api/fetch3";

const Schedule = () => {
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [scheduleData, setScheduleData] = useState([]);
  const [CalendarDetail, setCalendarDetail] = useState([]);

  const getCalendarLoad = async () => {
    try {
      const data = await getCalendar(3, 6, 23);
      console.log(data);
      setScheduleData(data);
    } catch (err) {
      console.log(err);
    }
  };

  const onClickSetSchedule = _result => {
    setSelectedSchedule(_result);
    // setCalendarDetail(_result);
  };

  useEffect(() => {
    getCalendarLoad();
    getCalendarDetail(setCalendarDetail);
  }, []);

  const titleContentShow = ({ date }) => {
    const day = moment(date).format("YYYY-MM-DD");
    const result = scheduleData.find(item => item.paymentAt === day);
    if (result) {
      return (
        <div
          className="schedule-box"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            paddingTop: 75,
            textAlign: "center",
          }}
          onClick={e => {
            e.stopPropagation();
            onClickSetSchedule(result);
          }}
        >
          <div style={{ width: "100%" }}>{result.total}</div>
        </div>
      );
    } else {
      return (
        <div
          onClick={e => {
            e.stopPropagation();
            onClickSetSchedule({
              ipayment: 0,
              paymentAt: day,
              total: 0,
              cmt: 0,
            });
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              paddingTop: 75,
              textAlign: "center",
              fontSize: 14,
            }}
          >
            자료없음
          </div>
        </div>
      );
    }
  };

  const handleClickDay = value => {
    const day = moment(value).format("YYYY-MM-DD");
    const result = scheduleData.find(item => item.day === day);
    setSelectedSchedule(result);
  };

  // const onSubmitForm = e => {
  //   e.preventDefault();
  //   // 서버연동 예정
  //   console.log(e.target);
  // };
  // const [price, setPrice] = useState(0);
  // const [place, setPlace] = useState("");
  // const [point, setPoint] = useState(0);
  // const onChangePrice = e => {
  //   // console.log(e.target.value);
  //   setPrice(e.target.value);
  // };
  // const onChangePlace = e => {
  //   // console.log(e.target.value);
  //   setPlace(e.target.value);
  // };
  // const onChangePoint = e => {
  //   // console.log(e.target.value);
  //   setPoint(e.target.value);
  // };
  // const onCalc = () => {
  //   const totalPrice = selectedSchedule.total + parseInt(price);
  //   const newArr = scheduleData.map(item => {
  //     if (item.paymentAt === selectedSchedule.paymentAt) {
  //       item.total = totalPrice;
  //     }
  //     return item;
  //   });
  //   setScheduleData(newArr);
  // };

  const detailClick = () => {
    console.log(CalendarDetail);
    console.log(scheduleData);
  };
  return (
    <>
      <button onClick={detailClick}>테스트 클릭</button>
      <div className="p-6 mt-5 bg-white flex justify-center gap-7">
        <div>
          <h1>Calendar</h1>
          <div style={{ border: "1px solid" }}>
            <Calendar
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
              <p>{selectedSchedule.paymentAt}</p>
              <br />
              <div>
                <div className="calendar-scroll">
                  {[...Array(1)].map((_, index) => (
                    <div className="calendar-info" key={index}>
                      <h2>{selectedSchedule.title}</h2>
                      <p className="food-name">{selectedSchedule.price}</p>
                      <p className="calendar-info-box">
                        {/* DB연동 막힌곳 */}
                        메뉴 : {CalendarDetail.menu}{" "}
                      </p>
                      <br />
                      <p className="calendar-info-box">가격 : {} </p>
                      <br />
                      <p className="calendar-info-box">장소 : {} </p>
                      <br />
                      <h2 className="calendar-info-box">페페 스코어</h2>
                      <div className="pepe-score">
                        <img src="/images/1점.png" alt="울음" />
                        <img src="/images/2점.png" alt="무난" />
                        <img src="/images/3점.png" alt="행복" />
                      </div>
                      <Radio.Group
                        className="pepe-score-raido"
                        name="point"
                        // onChange={onChangePoint}
                        >
                        <Radio value={1}>1점</Radio>
                        <Radio value={2}>2점</Radio>
                        <Radio value={3}>3점</Radio>
                      </Radio.Group>
                        {/* DB연동 막힌곳 */}
                    </div>
                  ))}
                </div>
                <div className="calendar-total">
                  <p> 오늘 먹은 총액 : {selectedSchedule.total}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Schedule;
