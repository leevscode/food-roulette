import axios from "axios";
const axiosInstance = axios.create({
  // baseURL: "http://192.168.0.144:5003",
  // baseURL: "http://localhost:5003",
  timeout: 1000,
  // headers: {
  //   "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
  //   Accept: "*/*",
  // },
});

const getCalendar = async (_iuser, _month, _year) => {
  try {
    const res = await axios.get(
      `/api/calendar/${_iuser}?year=${_year}&month=${_month}`,
    );
    const data = await res.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const getUserMenu = async setFunc => {
  try {
    const res = await axiosInstance.get("/api/menu/2/user");
    const result = res.data;
    setFunc(result);
    console.log(result);
  } catch (error) {
    console.error(error);
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


// const postMenus = async item => {
//   const headers = { "Content-Type": "multipart/form-data" };
//   try {
//     const res = await axiosInstance.post("/api/menu/2", item, headers);
//     const result = res.data;
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// };

// 데이터 보내기
export const postMenus = async _data => {
  console.log(_data);
  const headers = { "Content-Type": "application/json" };
  try {
    const res = await axios.post("/api/menu/2", _data, headers);
    const data = res.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export { axiosInstance, getMenus, postMenus, getCalendar };

