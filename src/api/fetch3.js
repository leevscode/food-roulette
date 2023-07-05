import axios from "axios";

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

export { getCalculate, getCalculateUser };
