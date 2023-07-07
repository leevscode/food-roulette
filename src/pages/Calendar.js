import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { Radio } from "antd";
import "../style/Calendar.css";
import { getCalendar } from "../api/fetch";
import { getCalendarDetail } from "../api/fetch3";
import CalendarDetailList from "../components/CalendarDetailList";

const Schedule = () => {
  const userId = JSON.parse(localStorage.getItem("user")).user_id;
  // 오늘 날짜 불러오기
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  // 날짜
  const [selectedSchedulePayment, setSelectedSchedulePayment] = useState("");
  // 총액
  const [selectedScheduleTotal, setSelectedScheduleTotal] = useState(0);
  const [scheduleData, setScheduleData] = useState([]);
  const [CalendarDetail, setCalendarDetail] = useState([]);

  const getCalendarLoad = async () => {
    try {
      const data01 = await getCalendar(userId, year, month);
      const data02 = await getCalendar(userId, year, month - 1);
      const data03 = await getCalendar(userId, year, month - 2);
      let copy = [...data01, ...data02, data03];
      setScheduleData(copy);
    } catch (err) {
      console.log(err);
    }
  };

  const getCalendarDetailLoad = async (_day, _iuser) => {
    try {
      const data = await getCalendarDetail(_day, _iuser);
      console.log("받은 자료 ", data);
      let filterData = data.filter(value => value.reviewGrade);
      console.log("리뷰를 등록하지 않은 데이터 filter함");
      setCalendarDetail(filterData);
    } catch (err) {
      console.log(err);
    }
  };

  const onClickSetSchedule = _result => {
    console.log("날짜를 클릭", _result);
    setSelectedSchedulePayment(_result.paymentAt);
    setSelectedScheduleTotal(_result.total);
    setSelectedSchedule(_result);
    getCalendarDetailLoad(_result.paymentAt, userId);
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

  return (
    <>
      <div className="p-6 mt-5 bg-white flex justify-center gap-7">
        <div>
          <h1>Calendar</h1>
          <div style={{ border: "1px solid" }}>
            <Calendar
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
