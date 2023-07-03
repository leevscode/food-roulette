import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

const Loading = () => {
  const styleObj = {
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
    background: "rgba(0, 0, 0, 0.8)",
    zIndex: 99999,
  };
  return (
    <div style={styleObj}>
      {/* <PacmanLoader color="rgb(255,242,0)" size={50} /> */}
      <img
        src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1586271105/noticon/eyjidxvaivj5xh1vitnn.gif"
        alt="룰렛이 들어갈 영역"
      />
    </div>
  );
};

export default Loading;
