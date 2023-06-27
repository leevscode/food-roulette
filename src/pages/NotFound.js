import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div>유효하지 않는 페이지 입니다</div>
      <Link to="/main" className="button-submit">
        <button>메인 페이지로 돌아가기</button>
      </Link>
    </>
  );
};

export default NotFound;
