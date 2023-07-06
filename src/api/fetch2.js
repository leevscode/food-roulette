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
// 이달의 금액 한도 불러오기
export const getMonthLimit = async (_userId, setFunc) => {
  try {
    console.log("넘겨진 ID 값은 ? ", _userId);
    const res = await axios.get(`/api/main/${_userId}`);
    const result = await res.data;
    console.log(res);
    console.log("result", result);
    console.log(result.monthLimit);
    setFunc(result.monthLimit);
    return result;
  } catch (error) {
    console.log(error);
  }
};
// 룰렛 당첨 메뉴 등록
export const postWinningMenu = async (winningMenuId, monthLimitId) => {
  console.log("imenu = ", winningMenuId);
  console.log("imanagement", monthLimitId);
  const headers = { "Content-Type": "application/json" };
  const postData = {
    imenu: winningMenuId,
    imanagement: monthLimitId,
  };
  try {
    const res = await axios.post(`/api/main`, postData, {
      headers,
    });
    const result = res.data;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
