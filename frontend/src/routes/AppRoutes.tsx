import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "../pages/Register/Registerpage";
import LoginPage from "../pages/Login/LoginPage";
import Layout from "../pages/Dashboard/Layout";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/layout" element={<Layout/>}/>
      </Routes>
    </BrowserRouter>
  );
}
