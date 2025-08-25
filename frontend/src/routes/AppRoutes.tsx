import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "../pages/Register/Registerpage";
import LoginPage from "../pages/Login/LoginPage";
import Layout from "../pages/Dashboard/Layout";
import { AdminDashboardLayout } from "../admin/layout/AdminLayout";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/layout" element={<Layout/>}/>
        <Route path="/admin" element={<AdminDashboardLayout/>}/>
      </Routes>
    </BrowserRouter>
  );
}
