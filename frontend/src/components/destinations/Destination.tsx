import { type FC } from "react";

interface Destination {

    id: number;
    city: string;
    country: string;
    price: string;
    image: string
}

const destinations: Destination[] = [
  {
    id: 1,
    city: "Paris",
    country: "France",
    price: "from €250",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    city: "Dubai",
    country: "UAE",
    price: "from €320",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    city: "New York",
    country: "USA",
    price: "from €400",
    image:
      "https://images.unsplash.com/photo-1602940659805-770d1b3b9911?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    city: "Tokyo",
    country: "Japan",
    price: "from €380",
    image:
      "https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    city: "Unguja",
    country: "Zanzibar",
    price: "from €180",
    image:
      "https://images.unsplash.com/photo-1628531895969-df353541bafe?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    city: "Kuala Lumpur",
    country: "Malaysia",
    price: "from €280",
    image:
      "https://images.unsplash.com/photo-1580496297468-1e05179cfd81?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    city: "Pritoria",
    country: "South Africa",
    price: "from €250",
    image:
      "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    city: "Lagos",
    country: "Nigeria",
    price: "from €320",
    image:
      "https://images.unsplash.com/photo-1618828665011-0abd973f7bb8?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const PopulationDestinations: FC = () => {

    return (

        <section className="bg-white py-16 px-6 md:px-12 lg:px-20">

            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                    Popular Destination & Offers
                </h2>
                <p className="mt-3 text-gray-600">
                    Explore the best deals for your next adventure
                </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

                {
                    destinations.map((dest) => (

                        <div key={dest.id} className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">

                            <div className="relative overflow-hidden">
                                <img src={ dest.image} alt={dest.city} className="h-56 w-full object-cover group-hover:scale-110 transition-transform duration-500"/>

                                <div className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full shadow">

                                    {dest.price}

                                </div>
                            </div>

                            <div className="p-5 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900"> { dest.city} </h3>
                                    <p className="text-sm text-gray-600"> {dest.country} </p>
                                </div>

                                <button className="mt-4 w-full py-2 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"> Book Now </button>
                            </div>

                        </div>
                    ))
                }
            </div>

        </section>
    )
}