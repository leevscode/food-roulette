import axios from "axios";
// 오늘 날짜 불러오기
// const date = new Date();
// const year = date.getFullYear();
// const month = String(date.getMonth() + 1).padStart(2, "0");
// const day = String(date.getDate()).padStart(2, "0");

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
export const getMonthLimit = async (_userId, setFunc, setData) => {
  try {
    console.log("넘겨진 ID 값은 ? ", _userId);
    const res = await axios.get(`/api/main/${_userId}`);
    const result = await res.data;
    console.log(res);
    console.log("result", result);
    setData(result);
    console.log(result.monthLimit);
    setFunc(result.monthLimit);
    return result;
  } catch (error) {
    console.log(error);
  }
};
// 룰렛 당첨 메뉴 등록
export const postWinningMenu = async (
  winningMenuId,
  monthLimitId,
  setReviewList,
) => {
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
    setReviewList(result);
  } catch (error) {
    console.log(error);
  }
};
// 해당 달의 리뷰 미등록 리스트 출력
export const getUnReviewList = async (_userId, setFunc, year, month) => {
  console.log(year, month);
  try {
    //http://192.168.0.144:5003/api/review/1?year=2023&month=07
    const res = await axios.get(
      `api/review/${_userId}?year=${year}&month=${month}`,
    );
    const result = res.data;
    console.log(res);
    console.log(result);
    setFunc(result);
  } catch (error) {
    console.log(error);
  }
};
// 해당 달의 리뷰 미등록한 메뉴 리뷰 등록
export const patchUnReviewMenu = async (
  _userId,
  reviewData,
  restaurant,
  currentMenuPrice,
  reviewGrade,
  selectedDate,
  ipayment,
) => {
  console.log(reviewData, restaurant, currentMenuPrice, reviewGrade);

  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth() + 1;

  const headers = { "Content-Type": "application/json" };
  const patchData = {
    ipayment: ipayment,
    month: month,
    year: year + "",
    currentMenuPrice: currentMenuPrice,
    reviewGrade: reviewGrade,
    restaurant: restaurant + "",
  };

  console.log("patch 명령", _userId, patchData);
  try {
    const res = await axios.patch(`api/review/${_userId}`, patchData, {
      headers,
    });
    const result = res.data;
    console.log(res);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
// 이달의 한도 금액 설정하기
export const postMonthLimit = async (
  _userId,
  _price,
  setFunc,
  setData,
  setMonthLimitId,
) => {
  const limitPrice = parseInt(_price);
  const headers = { "Content-Type": "application/json" };
  const postData = {
    monthLimit: limitPrice,
  };
  try {
    const res = await axios.post(`/api/main/${_userId}/plan`, postData, {
      headers,
    });
    const result = res.data;
    console.log(res);
    console.log(result);
    setData(result);
    setFunc(result.monthLimit);
    setMonthLimitId(result.imanagement);
  } catch (error) {
    console.log(error);
  }
};
