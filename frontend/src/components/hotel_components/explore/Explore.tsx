import { ArrowLeft, ArrowRight, ArrowUpRight, MapPin } from "lucide-react";

export default function ExploreComponent() {
  return (

    <section className="py-16 flex flex-col gap-6 items-center justify-center px-4">
      {/* Top Button */}
      <button className="flex items-center gap-2 border border-gray-300 rounded-full px-6 py-2">
        let&apos;s know us
        <ArrowRight />
      </button>

      {/* Heading */}
      <h1 className="text-2xl md:text-3xl font-semibold text-center max-w-2xl">
        Explore Stays, About Comfort, Your Stay, Our Priority
      </h1>

      {/* Grid Section */}
      <div className="py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* Left content */}
        <div className="space-y-4">
          <button className="border border-gray-200 rounded-full py-1 px-4 text-sm text-gray-700">
            About Us
          </button>
          <p className="text-xl md:text-2xl font-semibold leading-snug">
            Sunrise is a trusted platform connecting travelers with top hotels
            across the country
          </p>
          <button className="bg-black text-white flex items-center gap-2 rounded-full py-3 px-6 hover:bg-gray-900 transition">
            Learn More
            <span className="flex items-center justify-center bg-white text-black rounded-full p-1">
              <ArrowUpRight size={16} />
            </span>
          </button>
        </div>

        {/* Middle image card */}
        <div className="relative w-full h-64 md:h-80 lg:h-[300px] rounded-2xl overflow-hidden shadow-lg">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="room"
          />
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Overlay */}
          <div className="absolute inset-0 p-4 flex flex-col justify-between">
            <button className="self-start bg-black/40 text-white text-sm text-center rounded-full px-3 py-1 backdrop-blur-sm">
              Outdoor area
            </button>

            <div className="text-white space-y-4">
              <p className="text-lg md:text-xl font-medium leading-snug">
                A versatile platform offering a wide range of hotel options and
                services
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 bg-white text-black rounded-2xl px-4 py-2 text-sm font-medium">
                  <MapPin size={16} />
                  NYC, United States
                </div>

                <button className="rounded-full bg-white text-black p-2">
                  <ArrowUpRight />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="space-y-4 ">
          <div className="relative w-full h-48 md:h-56 rounded-2xl shadow-lg overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1648383228240-6ed939727ad6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="img-side"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <p className="text-sm md:text-base">
            Explore the perfect destination for comfort, relaxation, and luxury.
            Where hospitality meets excellence in every stay.
          </p>

          <div className="flex justify-end gap-2">
            <button className="border border-black rounded-full p-2">
              <ArrowLeft />
            </button>
            <button className="bg-black text-white rounded-full p-2">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto border-b border-gray-400 mt-4"></div>
    </section>
  );
}
