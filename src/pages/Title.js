import React from "react";
import { Link } from "react-router-dom";
const Title = () => {
  return (
    <div className="md:container md:mx-auto">
      <div className="wel">Wel come!</div>
      <br />
      <div className="app-info">당신은 누구십니까?</div>
      <input className="input-title"></input>
      <br />
      <Link to="/main" className="button-submit">
        <button>딸깍</button>
      </Link>
    </div>
  );
};

export default Title;
