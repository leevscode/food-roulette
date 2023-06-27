import React from "react";
import { Link } from "react-router-dom";
import "../style/Title.css";

const Title = () => {
  return (
    <div className="bg-box">
      <div className="box">
        <div className="logo"></div>
        <br />
        <div className="">당신은 누구십니까?</div>
        <input className="input-title"></input>
        <br />
        <Link to="/main" className="button-submit">
          <button>딸깍</button>
        </Link>
      </div>
    </div>
  );
};

export default Title;
