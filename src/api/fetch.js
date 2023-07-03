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

const getMenus = async () => {
  try {
    const res = await axiosInstance.get("/api/menu/2");
    const result = res.data;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

const postMenus = async item => {
  const headers = { "Content-Type": "multipart/form-data" };
  try {
    const res = await axiosInstance.post("/api/menu/2", item, headers);
    const result = res.data;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

export { axiosInstance, getMenus, postMenus };
