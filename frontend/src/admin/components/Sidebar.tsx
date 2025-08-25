import { Home , Users , Settings } from "lucide-react";
import { Link } from "react-router-dom";


export const Sidebar = () =>  {

    return (

        <div className="h-screen w-64 bg-gray-800 text-white flex flex-col shadow-lg">

            <div className="p-6 text-2xl font-bold border-b border-indigo-500">
                Admin Panel
            </div>

            <nav className="flex-1 p-4 space-y-3">

                <Link to="/admin/dashboard" className="flex items-center gap-3 p-2 rounded-lg hover:bg-indigo-500 transition">
                    <Home className="w-5 h-5"/> Dashboard 
                </Link>

                <Link to="/admin/user" className="flex items-center gap-3 p-2 rounded-lg hover:bg-indigo-500 transition">
                    <Users className="w-5 h-5"/> Users 
                </Link>

                <Link to="/admin/settings" className="flex items-center gap-3 p-2 rounded-lg hover:bg-indigo-500 transition">
                    <Settings className="w-5 h-5"/> Settings
                </Link>

            </nav>

        </div>
    )
}