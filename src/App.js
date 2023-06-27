import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Title from "./pages/Title";
import Main from "./pages/Main";
import Calendar from "./pages/Calendar";
import Menu from "./pages/Menu";
import History from "./pages/History";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="/main" element={<Main />} />
        <Route path="/Calendar" element={<Calendar />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/history" element={<History />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
