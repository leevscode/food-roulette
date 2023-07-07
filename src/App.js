import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Intro from "./pages/Intro";
import Main from "./pages/Main";
import Calendar from "./pages/Calendar";
import Menu from "./pages/Menu";
import Calculate from "./pages/Calculate";
import NotFound from "./pages/NotFound";
import Review from "./pages/Review";

function App() {
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState(0);
  const [reviewList, setReviewList] = useState();
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Intro setUserName={setUserName} setUserId={setUserId} />}
        />
        <Route path="/" element={<Header />}>
          <Route
            path="/main"
            element={
              <Main
                userName={userName}
                setUserName={setUserName}
                userId={userId}
                setReviewList={setReviewList}
              />
            }
          />
          <Route path="/menu" element={<Menu />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/calculate" element={<Calculate />} />
          <Route path="/review" element={<Review reviewList={reviewList} />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
