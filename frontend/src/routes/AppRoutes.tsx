import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "../pages/Register/Registerpage";
import LoginPage from "../pages/Login/LoginPage";
import Layout from "../pages/Dashboard/Layout";
import { AdminDashboardLayout } from "../admin/layout/AdminLayout";
import {Dashboard} from "../admin/pages/Dashboard";
import Users from "../admin/pages/Users";
import Flights from "../admin/pages/Flights";
import AirportsPage  from "../admin/pages/Airports";
import Pricing from "../admin/pages/Pricing";
import Booking from "../admin/pages/Booking";
import Reports from "../admin/pages/Report";
import Settings from "../admin/pages/Settings";
import Hotels from "../pages/Hotels/Hotels";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/layout" element={<Layout/>}/>
        <Route path="/hotels" element={<Hotels/>}/>
        
        {/* Admin Routes - using nested routing */}
        <Route path="/admin" element={<AdminDashboardLayout />}>
          {/* <Route index element={<Dashboard />} /> */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="flights" element={<Flights />} />
          <Route path="airports" element={<AirportsPage />} />
          <Route path="booking" element={<Booking />} />
          <Route path="price" element={<Pricing />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
          <Route path="user" element={<Users/>}/>
        </Route>
        
        {/* Default route */}
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}