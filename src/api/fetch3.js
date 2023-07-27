import axios from "axios";
import { axiosInstance } from "./fetch";

const getCalendarDetail = async (_day, _iuser) => {
  try {
    const res = await axiosInstance.get(
      `/api/calendar/${_iuser}/detail?paymentAt=${_day}`,
    );
    const data = await res.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return {};
  }
};

const getCalculate = async (userId, month, year, setFunc) => {
  try {
    const res = await axiosInstance.get(
      `/api/calculate/${userId}?month=${month}&year=${year}`,
    );
    const result = await res.data;
    // console.log(result);
    setFunc(result);
    return result;
  } catch (error) {
    console.log(error);
    return {};
  }
};

const getCalculateUser = async (_user, _month, _year) => {
  try {
    const res = await axiosInstance.get(
      `/api/calculate/${_user}?month=${_month}&year=${_year}`,
    );
    const result = await res.data;
    console.log(result);

    return result;
  } catch (error) {
    console.log(error);
    return {};
  }
};

// 보류
export const deleteCalendar = async item => {
  try {
    const res = await axiosInstance.delete(
      `/api/calender/${1}/detail?ipayment=${item.ipayment}&imanagement=${
        item.imanagement
      }`,
    );
    const data = res.data;
    return data; // 삭제 결과 반환
  } catch (err) {
    console.log(err);
    return {}; // 오류 발생 시 빈 객체 반환
  }
};

export { getCalculate, getCalculateUser, getCalendarDetail };
