import React from "react";
import { Link } from "react-router-dom";
import { NotFoundPage, NotFoundText, NotFoundButton } from "../style/NotFoundCSS";

const NotFound = () => {
  return (
    <>
      <NotFoundPage>
        <NotFoundText>
          <p>유효하지 않는 페이지 입니다</p>
          <br />
          <Link to="/main">
            <NotFoundButton>메인 페이지로 돌아가기</NotFoundButton>
          </Link>
        </NotFoundText>
      </NotFoundPage>
    </>
  );
};

export default NotFound;
