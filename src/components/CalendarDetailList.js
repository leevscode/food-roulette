import { Radio } from "antd";
import React from "react";

const CalendarDetailList = ({ item }) => {
  return (
    <div className="detail-box">
      <p className="calendar-info-box">메뉴 : {item.menu}</p>
      <p className="calendar-info-box">가격 : {item.currentMenuPrice}</p>
      <p className="calendar-info-box">장소 : {item.restaurant}</p>
      <h2 className="calendar-info-box">페페 스코어 : {item.reviewGrade}점</h2>
      <div className="pepe-score">
        <img src="/images/1점.jpg" alt="울음" />
        <img src="/images/2점.png" alt="무난" />
        <img src="/images/3점.png" alt="행복" />
      </div>
      <Radio.Group
        className="pepe-score-raido"
        name="point"
        value={item.reviewGrade}
        // onChange={onChangePoint}
      >
        <Radio value={1}>1점</Radio>
        <Radio value={2}>2점</Radio>
        <Radio value={3}>3점</Radio>
      </Radio.Group>
    </div>
  );
};

export default CalendarDetailList;
