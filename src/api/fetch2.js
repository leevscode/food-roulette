import axios from "axios";

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
