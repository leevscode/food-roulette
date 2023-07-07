import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { Radio } from "antd";
import "../style/Calendar.css";
import { getCalendar } from "../api/fetch";
import { getCalendarDetail } from "../api/fetch3";
import CalendarDetailList from "../components/CalendarDetailList";

const Schedule = () => {
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  // 날짜
  const [selectedSchedulePayment, setSelectedSchedulePayment] = useState("");
  // 총액
  const [selectedScheduleTotal, setSelectedScheduleTotal] = useState(0);
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
  const getCalendarDetailLoad = async (_day, _iuser) => {
    try {
      const data = await getCalendarDetail(_day, _iuser);
      console.log("받은 자료 ", data);
      setCalendarDetail(data);
    } catch (err) {
      console.log(err);
    }
  };

  const onClickSetSchedule = _result => {
    // console.log("날짜를 클릭", _result);
    setSelectedSchedulePayment(_result.paymentAt);
    setSelectedScheduleTotal(_result.total);
    setSelectedSchedule(_result);

    // iuser 적용해야 합니다.
    getCalendarDetailLoad(_result.paymentAt, 3);
    // setCalendarDetail(_result);
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

  // react-calendar 에 있는 거 (사용할 필요없는 듯)
  const handleClickDay = value => {
    // console.log("또 날짜 클릭");
    // const day = moment(value).format("YYYY-MM-DD");
    // const result = scheduleData.find(item => item.day === day);
    // setSelectedSchedule(result);
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

  return (
    <>
      <div className="p-6 mt-5 bg-white flex justify-center gap-7">
        <div>
          <h1>Calendar</h1>
          <div style={{ border: "1px solid" }}>
            <Calendar
              // onClickDay={handleClickDay}
              calendarType="US"
              formatDay={(locale, date) => moment(date).format("D")}
              tileContent={titleContentShow}
            />
          </div>
        </div>

        <div className="calendar-menubox">
          {/* 날짜 및 안내 문구 출력 영역 */}
          <div>
            {selectedSchedule ? (
              <p>{selectedSchedulePayment}</p>
            ) : (
              <p className="calendar-menutext">
                날짜를 <br /> 선택해주세요!
              </p>
            )}
          </div>

          {/* 목록 출력하기 */}
          {selectedSchedule ? (
            <div>
              {CalendarDetail ? (
                <div className="calendar-scroll">
                  {/* DB를 이용한 목록 출력 */}
                  {CalendarDetail.length === 0 ? (
                    <div>돈을 절약 하셨군요</div>
                  ) : (
                    <div>
                      {CalendarDetail.map((item, index) => (
                        <CalendarDetailList key={index} item={item} />
                      ))}
                    </div>
                  )}
                </div>
              ) : null}
            </div>
          ) : null}

          {/* 총액 출력 영역 */}
          <div>
            {selectedSchedule ? (
              <div className="calendar-total">
                <p>오늘 먹은 총액 : {selectedScheduleTotal}</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;
