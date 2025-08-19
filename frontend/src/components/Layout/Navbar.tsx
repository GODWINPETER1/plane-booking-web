import { Plane , Hotel , Car , ChevronDown , User} from 'lucide-react';


export const Navbar = () => {

    const navItems = [
        {name: 'Flight' , icon: Plane},
        {name: 'Hotels' , icon: Hotel},
        {name: 'Flight + Hotel' , icon: Plane },
        {name: 'Car rental' , icon: Car },
    ]

    return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-950 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 md:py-0 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold mr-8 cursor-pointer">gDreams</h1>
          <div className="hidden lg:flex items-center space-x-6 h-full">
            {navItems.map((item) => (
              <a key={item.name} href="#" className="flex items-center space-x-2 py-5 px-2 hover:bg-gray-500 transition-colors duration-200">
                <item.icon size={20} />
                <span>{item.name}</span>
              </a>
            ))}
            <div className="relative group">
              <button className="flex items-center space-x-1 py-5 px-2 hover:bg-blue-700 transition-colors duration-200">
                <span>More</span>
                <ChevronDown size={16} />
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="hidden sm:flex items-center space-x-2 py-2 px-4 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
            <User size={20} />
            <span className="text-sm">Manage booking</span>
          </button>
          <button className="flex items-center space-x-1 text-sm py-2 px-2 rounded-full hover:bg-blue-700 transition-colors duration-200">
            <span>Can we help?</span>
            <ChevronDown size={16} />
          </button>
          <div className="hidden md:flex items-center space-x-1 text-sm py-2 px-2 rounded-full hover:bg-blue-700 transition-colors duration-200">
            <span>EN (€)</span>
            <ChevronDown size={16} />
          </div>
        </div>
      </div>
    </nav>
  );
}