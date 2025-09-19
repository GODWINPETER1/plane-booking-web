import {type FC } from "react";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  feedback: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Frequent Traveler",
    feedback:
      "Booking my trip was so easy with gAirline. The interface is smooth, and I got the best price compared to other platforms!",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Lee",
    role: "Business Consultant",
    feedback:
      "I use gAirline for all my work trips. Their 24/7 support saved me once when my flight got canceled. Highly recommend!",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 4,
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Adventure Seeker",
    feedback:
      "I love how simple it is to compare flight + hotel packages. I saved both time and money planning my holiday!",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 5,
  },
];

export const Testimonials: FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          What Our Customers Say
        </h2>
        <p className="mt-3 text-gray-600">
          Hear from travelers who booked their journeys with{" "}
          <span className="text-blue-600 font-semibold">gAirline</span>.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
            <p className="text-sm text-gray-500">{t.role}</p>
            <div className="flex justify-center space-x-1 mt-2 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <p className="text-gray-600 text-sm italic">"{t.feedback}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};
