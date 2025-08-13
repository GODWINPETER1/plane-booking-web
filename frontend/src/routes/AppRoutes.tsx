import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "../pages/Register/Registerpage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}
