import React, {type ReactNode } from 'react';
import { FaHome, FaPlane, FaCalendarAlt, FaBell, FaTrash, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface DashboardLayoutProps {
  children: ReactNode;
}

const navItems = [
  { name: 'Home', icon: <FaHome />, path: '/' },
  { name: 'Airports', icon: <FaPlane />, path: '/airports' },
  { name: 'Calendar', icon: <FaCalendarAlt />, path: '/calendar' },
  { name: 'Notifications', icon: <FaBell />, path: '/notifications' },
  { name: 'Trash', icon: <FaTrash />, path: '/trash' },
  { name: 'Settings', icon: <FaCog />, path: '/settings' },
];

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold mb-8 flex items-center">
            <FaPlane className="mr-2" /> Booking
          </h1>
          <nav>
            <ul>
              {navItems.map((item) => (
                <li key={item.name} className="mb-2">
                  <Link to={item.path} className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-md">
                    {item.icon}
                    <span className="ml-3">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div>
          <button className="flex items-center w-full p-2 text-red-500 hover:bg-red-100 rounded-md">
            <FaCog className="mr-2" />
            <span className="ml-3">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header/Search bar can go here */}
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;