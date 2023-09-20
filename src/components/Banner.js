import React from "react";

const banner = () => {
  return (
    <div style={{ marginTop: 85, marginLeft: "1%" }}>
      {/* <img
        src="https://anyang.greenart.co.kr/assets/_img/header/mainlogo_new.png"
        alt="그린컴퓨터아트학원"
        width={200}
        height={200}
      /> */}
      <img
        src="/images/green.png"
        alt="그린컴퓨터아트학원"
        width={270}
        height={270}
      />
      <div
        style={{
          position: "absolute",
          width: "270px",
          height: "100px",
          background: "#fff",
          marginTop: "-90px",
        }}
      ></div>
    </div>
  );
};

export default banner;
