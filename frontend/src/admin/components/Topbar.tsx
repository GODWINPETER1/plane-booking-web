import { Bell , User  } from "lucide-react";
import { useAuth } from "../../context/AuthContext";



export const TopBar = () => {

    const { user } = useAuth()

    return(

        <div className="h-16 bg-white shadow flex items-center justify-between px-6">

            <h2 className="text-xl font-semibold text-gray-800"> Dashboard </h2>

            <div className="flex items-center gap-4">

                <button className="p-2 rounded-full hover:bg-gray-100">
                    <Bell className="w-5 h-5 text-gray-600"/>
                </button>

                <div className="flex items-center gap-2">
                    <User className="w-6 h-6 text-gray-600"/>
                    <span className="text-gray-700 font-medium"> {user?.fullName} </span>

                </div>

            </div>
        </div>
    )
}