import axios from "axios";
const axiosInstance = axios.create({
  // baseURL: "http://192.168.0.144:5003",
  // baseURL: "http://localhost:5003",
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
});

const getCalendar = async (_iuser, _year, _month) => {
  try {
    const res = await axiosInstance.get(
      `/api/calendar/${_iuser}?year=${_year}&month=${_month}`,
    );
    const data = await res.data;
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const getCommonMenu = async setFunc => {
  try {
    const res = await axiosInstance.get("/api/menu/common");
    const result = res.data;
    setFunc(result);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

// 데이터 보내기
export const postMenus = async _data => {
  console.log(_data);
  const headers = { "Content-Type": "application/json" };
  try {
    const res = await axiosInstance.post("/api/menu/2", _data, headers);
    const data = res.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export { axiosInstance, getCalendar };
