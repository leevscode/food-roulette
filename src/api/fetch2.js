import axios from "axios";

// 전체 메뉴 불러오기
export const getAllMenu = async (setFunc, _id) => {
  try {
    const res = await axios.get(`/api/menu/${_id}`);
    const result = res.data;
    setFunc(result);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
// 사용자가 입력한 메뉴 불러오기
export const getUserMenu = async (setFunc, _id) => {
  try {
    const res = await axios.get(`/api/menu/${_id}/user`);
    const result = res.data;
    setFunc(result);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
// 공통메뉴 불러오기
export const getCommonMenu = async setFunc => {
  try {
    const res = await axios.get("/api/menu/common");
    const result = res.data;
    setFunc(result);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
// 메뉴 검색
export const searchMenuItem = async (_tags, setFunc, user_id) => {
  const headers = { "Content-Type": "application/json" };
  const data = {
    tags: _tags,
  };
  try {
    const res = await axios.post(`/api/main/${user_id}/menu`, data, {
      headers,
    });
    const result = res.data;
    console.log(result);
    setFunc(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};
// 메뉴 데이터 보내기 - 메뉴 추가
export const postMenuItem = async (user_id, menu, tags) => {
  const headers = { "Content-Type": "application/json" };
  const data = {
    iuser: user_id,
    menu: menu,
    tags: tags,
  };
  try {
    const res = await axios.post("/api/menu", data, { headers });
    const result = res.data;
    console.log(result);
    // 배열의 길이가 출력됨(BE)
    return result;
  } catch (error) {
    console.log(error);
  }
};
// 메뉴 아이템 삭제
export const deleteMenuItem = async (_userId, _menuId) => {
  try {
    await axios.delete(`/api/menu/${_userId}?iuserMenu=${_menuId}`);
    // const res = await axios.delete(`/api/menu/2?iuserMenu=${_id}`);
    // const result = res.data;
    // console.log(result);
  } catch (error) {
    console.log(error);
  }
};
