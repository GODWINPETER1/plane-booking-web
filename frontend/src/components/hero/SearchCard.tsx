import React, { useState } from 'react';
import { Plane, Hotel, Car, MapPin, CalendarDays, ArrowRight, ChevronDown } from 'lucide-react';

export default function SearchCard() {
  const [activeTab, setActiveTab] = useState<string>('flights');
  const [tripType, setTripType] = useState<string>('return');

  const tabOptions = [
    { id: 'flights', label: 'Flights', icon: Plane },
    { id: 'hotels', label: 'Hotels', icon: Hotel },
    { id: 'flight+hotel', label: 'Flight + Hotel', icon: Plane },
    { id: 'carrental', label: 'Car rental', icon: Car },
  ];

  return (
    <div className="relative bg-white rounded-2xl shadow-2xl p-4 sm:p-6 w-full max-w-6xl z-10">
      {/* Tabs */}
      <div className="flex space-x-2 border-b border-gray-200 mb-6">
        {tabOptions.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 py-3 px-4 rounded-t-lg transition-colors duration-200 ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <tab.icon size={20} />
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
        {/* The 'Save up to 40%' label */}
        <div className="flex-grow flex items-center justify-end">
          <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full -mt-2">
            Save up to 40%
          </span>
        </div>
      </div>

      {activeTab === 'flights' && (
        <>
          {/* Radio Buttons for Trip Type */}
          <div className="flex space-x-4 mb-6 text-gray-700 font-semibold">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="tripType"
                value="return"
                checked={tripType === 'return'}
                onChange={(e) => setTripType(e.target.value)}
                className="form-radio text-blue-600"
              />
              <span>Return</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="tripType"
                value="oneway"
                checked={tripType === 'oneway'}
                onChange={(e) => setTripType(e.target.value)}
                className="form-radio text-blue-600"
              />
              <span>One way</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="tripType"
                value="multicity"
                checked={tripType === 'multicity'}
                onChange={(e) => setTripType(e.target.value)}
                className="form-radio text-blue-600"
              />
              <span>Multi-city</span>
            </label>
            <div className="relative">
              <button className="flex items-center space-x-1 text-sm">
                <span>Economy</span>
                <ChevronDown size={16} />
              </button>
            </div>
            <label className="flex items-center space-x-2 cursor-pointer ml-auto">
              <input type="checkbox" className="form-checkbox text-blue-600 rounded" />
              <span>Direct flights</span>
            </label>
          </div>

          {/* Form Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-6">
            <div className="md:col-span-2">
              <label htmlFor="from" className="block text-xs text-gray-500 font-medium">
                Where from?
              </label>
              <div className="relative flex items-center">
                <MapPin size={20} className="absolute left-3 text-gray-400" />
                <input
                  type="text"
                  id="from"
                  placeholder="e.g. New York"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="to" className="block text-xs text-gray-500 font-medium">
                Where to?
              </label>
              <div className="relative flex items-center">
                <MapPin size={20} className="absolute left-3 text-gray-400" />
                <input
                  type="text"
                  id="to"
                  placeholder="e.g. London"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                />
                <button className="absolute right-3 text-gray-400 p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
            <div className="md:col-span-1">
              <label htmlFor="departure" className="block text-xs text-gray-500 font-medium">
                Departure
              </label>
              <div className="relative flex items-center">
                <CalendarDays size={20} className="absolute left-3 text-gray-400" />
                <input
                  type="date"
                  id="departure"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                />
              </div>
            </div>
            <div className="md:col-span-1">
              <label htmlFor="return" className="block text-xs text-gray-500 font-medium">
                Return
              </label>
              <div className="relative flex items-center">
                <CalendarDays size={20} className="absolute left-3 text-gray-400" />
                <input
                  type="date"
                  id="return"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Search Buttons */}
          <div className="flex justify-end space-x-4">
            <button className="bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-full hover:bg-gray-300 transition-colors duration-200">
              Search Flight + Hotel
            </button>
            <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-700 transition-colors duration-200">
              Search Flights
            </button>
          </div>
        </>
      )}
    </div>
  );
}