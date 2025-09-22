import { useState } from "react";
import { Plane, Hotel, Car, ChevronDown,  Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Flights", icon: Plane , Link: '/flights' },
    { name: "Hotels", icon: Hotel , Link: '/hotels'},
    { name: "Flight + Hotel", icon: Plane , Link: '/flight/hotels' },
    { name: "Car rental", icon: Car , Link: '/car'},
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold cursor-pointer tracking-wide">
          <Link to= "/layout"> gAirline </Link>
        </h1>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.Link}
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-800 transition"
            >
              <item.icon size={18} />
              <span>  {item.name}  </span>
            </Link>
          ))}
          <button className="flex items-center gap-1 px-3 py-2 rounded-md hover:bg-gray-800 transition">
            <span>More</span>
            <ChevronDown size={16} />
          </button>
        </div>

        {/* Right Controls */}
        <div className="hidden md:flex items-center space-x-4">
          
          <button className="flex items-center gap-1 text-sm py-2 px-3 rounded-md hover:bg-gray-800 transition">
            <span>Can we help?</span>
            <ChevronDown size={16} />
          </button>
          <button className="flex items-center gap-1 text-sm py-2 px-3 rounded-md hover:bg-gray-800 transition">
            <span>EN (€)</span>
            <ChevronDown size={16} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex items-center p-2 rounded-md hover:bg-gray-800 transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-black border-t border-gray-800 px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href="#"
              className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-800 transition"
            >
              <item.icon size={18} />
              <span>{item.name}</span>
            </a>
          ))}
          <hr className="border-gray-700" />
          <button className="w-full flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-800 transition">
            <span>Can we help?</span>
            <ChevronDown size={16} />
          </button>
          <button className="w-full flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-800 transition">
            <span>EN (€)</span>
            <ChevronDown size={16} />
          </button>
         
        </div>
      )}
    </nav>
  );
};

