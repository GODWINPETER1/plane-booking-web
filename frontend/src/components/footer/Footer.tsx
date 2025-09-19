import {type FC } from "react";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export const Footer: FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">gAirline</h2>
          <p className="text-gray-400">
            Your trusted partner for flights, hotels, and unforgettable travel
            experiences worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Flights</a></li>
            <li><a href="#" className="hover:text-white">Hotels</a></li>
            <li><a href="#" className="hover:text-white">Car Rentals</a></li>
            <li><a href="#" className="hover:text-white">Travel Deals</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white"><Twitter size={20} /></a>
            <a href="#" className="hover:text-white"><Instagram size={20} /></a>
            <a href="#" className="hover:text-white"><Youtube size={20} /></a>
          </div>
        </div>
      </div>

      {/* Divider + Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} gAirline. All rights reserved.
      </div>
    </footer>
  );
};
