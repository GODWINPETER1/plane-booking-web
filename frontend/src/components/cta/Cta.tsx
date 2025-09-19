import {type FC } from "react";
import { Send } from "lucide-react";

export const Newsletter: FC = () => {
  return (
    <section className="bg-blue-600 py-16 px-6 md:px-12 lg:px-20 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Stay Updated With Travel Deals ✈️
        </h2>
        <p className="mt-3 text-blue-100 text-lg">
          Subscribe to our newsletter and be the first to know about exclusive
          offers, new destinations, and travel tips.
        </p>

        {/* Newsletter Form */}
        <form className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-blue-600 font-semibold hover:bg-gray-100 transition duration-300"
          >
            Subscribe
            <Send size={18} />
          </button>
        </form>

        <p className="mt-4 text-sm text-blue-200">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};
