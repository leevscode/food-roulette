import React from "react";
import { Link } from "react-router-dom";
import "../style/Title.css";

const Title = () => {
  return (
    <div className="bg-box">
      <div className="box">
        <div className="box-text">
        <div className="logo"></div>
        <p>당신은 누구십니까?</p>
        <input className="input-title"></input>
        <br />
        <Link to="/main" className="button-submit">
          <button>딸깍</button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Title;
