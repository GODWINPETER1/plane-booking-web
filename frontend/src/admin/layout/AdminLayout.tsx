import { Sidebar } from "../components/Sidebar";
import { TopBar } from "../components/Topbar";
import { Outlet } from "react-router-dom";

export const AdminDashboardLayout = () => {
  return (
    <div className="flex ">
      <Sidebar />
      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        <main className="p-6 flex-grow bg-gray-100 overflow-auto">
          <Outlet /> {/* This will render the nested routes */}
        </main> 
      </div>
    </div>
  );
};