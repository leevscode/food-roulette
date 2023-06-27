import React from "react";
import { Link } from "react-router-dom";
import "../style/NotFound.css";
const NotFound = () => {
  return (
    <>
      <div className="NotFound">
        <div className="NotFound-box">
          <p>유효하지 않는 페이지 입니다</p>
          <br />
          <Link to="/main" className="button-submit">
            <button>메인 페이지로 돌아가기</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
