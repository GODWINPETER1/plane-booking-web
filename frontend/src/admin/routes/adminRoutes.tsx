import { BrowserRouter , Routes , Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { AdminDashboardLayout } from "../layout/AdminLayout";
import Users from "../pages/Users";
import Settings from "../pages/Settings";

export const AdminRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminDashboardLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="user" element={<Users/>}/>
          <Route path="settings" element={<Settings/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
