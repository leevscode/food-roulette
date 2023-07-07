import axios from "axios";

// 진행 막힌 부분
const getCalendarDetail = async (_day, _iuser) => {
  try {
    const res = await axios.get(
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
// 진행 막힌 부분

const getCalculate = async setFunc => {
  try {
    const res = await axios.get("api/calculate/1?month=06&year=2023");
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
    const res = await axios.get(
      `api/calculate/${_user}?month=${_month}&year=${_year}`,
    );
    const result = await res.data;
    console.log(result);

    return result;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export { getCalculate, getCalculateUser, getCalendarDetail };