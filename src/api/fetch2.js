import axios from "axios";

// 전체 메뉴 불러오기
export const getAllMenu = async setFunc => {
  try {
    const res = await axios.get("/api/menu/2");
    const result = res.data;
    setFunc(result);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
// 메뉴 검색
export const searchMenuItem = async (_tags, setFunc) => {
  const headers = { "Content-Type": "application/json" };
  const data = {
    tags: _tags,
  };
  try {
    const res = await axios.post("/api/main/2/menu", data, { headers });
    const result = res.data;
    console.log(result);
    setFunc(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};
// 메뉴 데이터 보내기
export const postMenuItem = async (menu, tags) => {
  const headers = { "Content-Type": "application/json" };
  const data = {
    // id는 추후 동적으로 받아와야 함
    iuser: 2,
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
export const deleteMenuItem = async _id => {
  try {
    await axios.delete(`/api/menu/2?iuserMenu=${_id}`);
    // const res = await axios.delete(`/api/menu/2?iuserMenu=${_id}`);
    // const result = res.data;
    // console.log(result);
  } catch (error) {
    console.log(error);
  }
};
