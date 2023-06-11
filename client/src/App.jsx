import "./App.css";
import { AdminPage } from "./Router/Admin-page/admin.dashboard.component";
import { NoticePage } from "./Router/Notice-page/noitce-page.componet";
import Home from "./components/Home-coponent/home.component";
import { Route, Routes } from "react-router-dom";
import { MembersList } from "./components/member-list/member-list.component";
import Login from "./components/LoginAndSignup/Login";
import Signup from "./components/LoginAndSignup/Signup";
import LoginData from "./components/LoginAndSignup/LoginData";
import AdminDetail from "./components/AdminDetail/AdminDetail";
import NavbarComponent from "./components/navbar-component/navbar.component";
import Notice from "./components/AdminDetail/Notice";
const App = () => {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/notice" element={<NoticePage />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/admin" element={<AdminPage />} />
        <Route exact path="/loginData" element={<LoginData />} />
        <Route exact path="/admin/detail" element={<AdminDetail />} />
        <Route exact path="/admin/notice" element={<Notice />} />
      </Routes>
    </>
  );
};
export default App;
