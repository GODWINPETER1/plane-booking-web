import { Home, Users, Settings, Plane, Book } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const SIDEBAR_MENU = [
  { menu: "Dashboard", link: "/admin/dashboard", icon: Home },
  { menu: "Flights", link: "/admin/flights", icon: Plane },
  { menu: "Airports", link: "/admin/airports", icon: Home },
  { menu: "Booking", link: "/admin/booking", icon: Book },
  { menu: "Pricing", link: "/admin/price", icon: Users },
  { menu: "Reports", link: "/admin/reports", icon: Book },
  { menu: "Settings", link: "/admin/settings", icon: Settings }
];

export const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="h-screen w-64 bg-white text-gray-900 flex flex-col shadow-lg font-sans">
      
      {/* Logo / Title */}
      <div className="p-6 text-2xl font-extrabold border-b border-gray-300">
        Admin Panel
      </div>

      {/* Menu */}
      <nav className="flex-1 flex flex-col p-4">
        {/* Top Items */}
        <div className="flex flex-col space-y-2">
          {SIDEBAR_MENU.filter(item => item.menu !== "Settings").map((item, index) => {
            const isActive = location.pathname === item.link;
            return (
              <Link
                key={index}
                to={item.link}
                className={`flex items-center gap-3 p-3 rounded-lg transition
                  ${isActive ? "bg-gray-100 font-semibold" : "hover:bg-gray-100"}`}
              >
                <item.icon className="w-5 h-5" /> {item.menu}
              </Link>
            );
          })}
        </div>

        {/* Bottom Item */}
        <div className="mt-auto">
          {SIDEBAR_MENU.filter(item => item.menu === "Settings").map((item, index) => {
            const isActive = location.pathname === item.link;
            return (
              <Link
                key={index}
                to={item.link}
                className={`flex items-center gap-3 p-3 rounded-lg transition
                  ${isActive ? "bg-gray-100 font-semibold" : "hover:bg-gray-100"}`}
              >
                <item.icon className="w-5 h-5" /> {item.menu}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};
