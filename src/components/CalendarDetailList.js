import { Radio } from "antd";
import React from "react";
import { deleteCalendar } from "../api/fetch3";

const CalendarDetailList = ({ item }) => {
  console.log("목록", item);
  const handlerDelete = async () => {
    await deleteCalendar(item);
  };
  return (
    <div className="detail-box">
      {/* <div onClick={handlerDelete}>삭제</div> */}
      <p className="calendar-info-box">메뉴 : {item.menu}</p>
      <p className="calendar-info-box">가격 : {item.currentMenuPrice}</p>
      <p className="calendar-info-box">장소 : {item.restaurant}</p>
      <h2 className="calendar-info-box">페페 스코어 : {item.reviewGrade}점</h2>
      <div className="pepe-score">
        <img src="/images/1점.png" alt="울음" />
        <img src="/images/2점.png" alt="무난" />
        <img src="/images/3점.png" alt="행복" />
      </div>
      <Radio.Group
        className="pepe-score-raido"
        name="point"
        value={item.reviewGrade}
        // onChange={onChangePoint}
      >
        {[1, 2, 3].map((element, idx) => {
          if (item.reviewGrade === element) {
            return (
              <Radio key={idx} value={element}>
                {element}점
              </Radio>
            );
          } else {
            return (
              <Radio key={idx} value={element} disabled>
                {element}점
              </Radio>
            );
          }
        })}
      </Radio.Group>
    </div>
  );
};

export default CalendarDetailList;
