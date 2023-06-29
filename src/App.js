import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Intro from "./pages/Intro";
import Main from "./pages/Main";
import Calendar from "./pages/Calendar";
import Menu from "./pages/Menu";
import History from "./pages/History";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/" element={<Header />}>
          <Route path="/menu" element={<Menu />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/main" element={<Main />} />
          <Route path="/history" element={<History />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;