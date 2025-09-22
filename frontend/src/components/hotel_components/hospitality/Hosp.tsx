import { ArrowUpRight } from "lucide-react";

export default function HospitalityComponent() {
  return (
    <section className="py-16 px-8 flex gap-8">
      {/* Left content */}
      <div className="flex-1">
        {/* Filter buttons */}
        <div className="flex gap-3 mb-6">
          <button className="border border-gray-300 rounded-2xl px-4 py-2 text-sm font-semibold hover:bg-gray-50 transition-colors">
            Hotel
          </button>
          <button className="border border-gray-300 rounded-2xl px-4 py-2 text-sm font-semibold bg-black text-white hover:bg-gray-800 transition-colors">
            Room
          </button>
          <button className="border border-gray-300 rounded-2xl px-4 py-2 text-sm font-semibold hover:bg-gray-50 transition-colors">
            Luxury Hotel
          </button>
        </div>

        {/* Main card */}
        <div className="bg-gray-100 rounded-2xl flex overflow-hidden shadow-lg">
          {/* Image section */}
          <div className="w-2/5">
            <img 
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1729605411476-defbdab14c54?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Comfortable hotel room"
            />
          </div>

          {/* Content section */}
          <div className="w-3/5 p-8 flex flex-col justify-between">
            <div>
              <h2 className="font-semibold text-2xl mb-4">
                Comfortable rooms with excellent care
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                On-site convenience stores, fast room service, and even virtual
                concierge support — all to make your stay effortless.
              </p>
            </div>

            <div className="flex justify-between items-center">
              <button className="flex items-center gap-2 bg-black text-white text-sm rounded-full px-6 py-3 hover:bg-gray-800 transition-colors">
                See Details 
                <span className="bg-white text-black rounded-full p-1">
                  <ArrowUpRight size={16} />
                </span>
              </button>

              <div className="text-sm text-gray-500">
                1 / 5
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right content - empty for now */}
      <div className="flex-1"></div>
    </section>
  );
}