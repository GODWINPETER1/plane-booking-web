import React, { useState, useEffect, useRef } from "react";
import {
  Plane,
  Hotel,
  Car,
  MapPin,
  CalendarDays,
  Users,
  ArrowRight,
  ChevronDown,
  Search,
  Globe,
  X
} from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { loadAirports } from "../../admin/features/airports/airportSlice";

export default function SearchCard() {
  const dispatch = useAppDispatch();
  const { items: airports, loading } = useAppSelector((s) => s.airports);

  const [activeTab, setActiveTab] = useState<string>("flights");
  const [tripType, setTripType] = useState<string>("return");
  const [passengerCount, setPassengerCount] = useState(1);
  const [cabinClass, setCabinClass] = useState("Economy");
  const [showPassengerOptions, setShowPassengerOptions] = useState(false);

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [filteredFrom, setFilteredFrom] = useState<any[]>([]);
  const [filteredTo, setFilteredTo] = useState<any[]>([]);
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);

  const passengerRef = useRef(null);
  const fromRef = useRef(null);
  const toRef = useRef(null);

  const tabOptions = [
    
    { id: "flights", label: "Flights", icon: Plane },
    { id: "hotels", label: "Hotels", icon: Hotel },
    { id: "flight+hotel", label: "Flight + Hotel", icon: Plane },
    { id: "carrental", label: "Car rental", icon: Car },
  ];

  const cabinOptions = ["Economy", "Premium Economy", "Business", "First"];

  // Load airports on mount
  useEffect(() => {
    dispatch(loadAirports({}));
  }, [dispatch]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (passengerRef.current && !passengerRef.current.contains(event.target)) {
        setShowPassengerOptions(false);
      }
      if (fromRef.current && !fromRef.current.contains(event.target)) {
        setShowFromDropdown(false);
      }
      if (toRef.current && !toRef.current.contains(event.target)) {
        setShowToDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filter "from" airports as user types
  useEffect(() => {
    if (from.length > 0) {
      setFilteredFrom(
        airports.filter((a) =>
          `${a.name} ${a.city} ${a.code} ${a.country}`.toLowerCase().includes(from.toLowerCase())
        ).slice(0, 5) // Limit to 5 results for better UX
      );
      setShowFromDropdown(true);
    } else {
      setFilteredFrom([]);
      setShowFromDropdown(false);
    }
  }, [from, airports]);

  // Filter "to" airports as user types
  useEffect(() => {
    if (to.length > 0) {
      setFilteredTo(
        airports.filter((a) =>
          `${a.name} ${a.city} ${a.code} ${a.country}`.toLowerCase().includes(to.toLowerCase())
        ).slice(0, 5) // Limit to 5 results
      );
      setShowToDropdown(true);
    } else {
      setFilteredTo([]);
      setShowToDropdown(false);
    }
  }, [to, airports]);

  const swapAirports = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  const handlePassengerChange = (type, operation) => {
    setPassengerCount(prev => {
      if (type === 'adults') {
        return operation === 'increment' ? prev + 1 : Math.max(1, prev - 1);
      }
      return prev;
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-6xl mx-auto">
      {/* Header with tabs */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 border-b border-gray-100 pb-4">
        <div className="flex space-x-1 mb-4 sm:mb-0">
          {tabOptions.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 py-2 px-4 rounded-lg transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <tab.icon size={18} />
              <span className="text-sm font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
        <div className="bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
          Save up to 40% with member deals
        </div>
      </div>

      {activeTab === "flights" && (
        <>
          {/* Trip Type Selector */}
          <div className="flex space-x-4 mb-6">
            <div className="flex bg-gray-100 p-1 rounded-lg">
              {["return", "oneway", "multicity"].map((type) => (
                <button
                  key={type}
                  onClick={() => setTripType(type)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    tripType === type
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {type === "return" 
                    ? "Return" 
                    : type === "oneway" 
                    ? "One Way" 
                    : "Multi-City"}
                </button>
              ))}
            </div>
          </div>

          {/* Airport Selection */}
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4 mb-4">
            {/* From Airport */}
            <div className="md:col-span-3 relative" ref={fromRef}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                From
              </label>
              <div className="relative flex items-center">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  placeholder="City or airport"
                  className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  onFocus={() => from.length > 0 && setShowFromDropdown(true)}
                />
                {from && (
                  <button
                    onClick={() => setFrom("")}
                    className="absolute right-10 text-gray-400 hover:text-gray-600"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
              
              {showFromDropdown && filteredFrom.length > 0 && (
                <div className="absolute z-20 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                  {filteredFrom.map((a) => (
                    <button
                      key={a.id}
                      className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors flex items-center"
                      onClick={() => {
                        setFrom(`${a.city} (${a.code})`);
                        setShowFromDropdown(false);
                      }}
                    >
                      <div className="mr-3">
                        <Globe size={16} className="text-blue-500" />
                      </div>
                      <div>
                        <div className="font-medium">{a.city} ({a.code})</div>
                        <div className="text-xs text-gray-500">{a.name}, {a.country}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Swap Button */}
            <div className="hidden md:flex md:col-span-1 items-end justify-center pb-2">
              <button
                onClick={swapAirports}
                className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
              >
                <ArrowRight size={18} className="rotate-90" />
              </button>
            </div>

            {/* To Airport */}
            <div className="md:col-span-3 relative" ref={toRef}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                To
              </label>
              <div className="relative flex items-center">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  placeholder="City or airport"
                  className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  onFocus={() => to.length > 0 && setShowToDropdown(true)}
                />
                {to && (
                  <button
                    onClick={() => setTo("")}
                    className="absolute right-10 text-gray-400 hover:text-gray-600"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
              
              {showToDropdown && filteredTo.length > 0 && (
                <div className="absolute z-20 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                  {filteredTo.map((a) => (
                    <button
                      key={a.id}
                      className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors flex items-center"
                      onClick={() => {
                        setTo(`${a.city} (${a.code})`);
                        setShowToDropdown(false);
                      }}
                    >
                      <div className="mr-3">
                        <Globe size={16} className="text-blue-500" />
                      </div>
                      <div>
                        <div className="font-medium">{a.city} ({a.code})</div>
                        <div className="text-xs text-gray-500">{a.name}, {a.country}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Date and Passenger Selection */}
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4 mb-6">
            {/* Departure Date */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Departure
              </label>
              <div className="relative flex items-center">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <CalendarDays size={18} className="text-gray-400" />
                </div>
                <input
                  type="date"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            {/* Return Date */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Return
              </label>
              <div className="relative flex items-center">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <CalendarDays size={18} className="text-gray-400" />
                </div>
                <input
                  type="date"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  disabled={tripType === "oneway"}
                />
              </div>
            </div>

            {/* Passengers */}
            <div className="md:col-span-2 relative" ref={passengerRef}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Travelers
              </label>
              <button
                onClick={() => setShowPassengerOptions(!showPassengerOptions)}
                className="w-full flex items-center justify-between pl-3 pr-4 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors"
              >
                <div className="flex items-center">
                  <Users size={18} className="text-gray-400 mr-2" />
                  <span>{passengerCount} Passenger{passengerCount !== 1 ? 's' : ''}</span>
                </div>
                <ChevronDown size={16} className="text-gray-500" />
              </button>

              {showPassengerOptions && (
                <div className="absolute z-20 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 p-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-medium">Adults</span>
                    <div className="flex items-center space-x-3">
                      <button 
                        onClick={() => handlePassengerChange('adults', 'decrement')}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center disabled:opacity-50"
                        disabled={passengerCount <= 1}
                      >
                        -
                      </button>
                      <span>{passengerCount}</span>
                      <button 
                        onClick={() => handlePassengerChange('adults', 'increment')}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  <div className="pt-3 border-t border-gray-100">
                    <span className="font-medium">Cabin Class</span>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {cabinOptions.map(option => (
                        <button
                          key={option}
                          onClick={() => setCabinClass(option)}
                          className={`py-2 text-sm rounded-md transition-colors ${
                            cabinClass === option
                              ? "bg-blue-100 text-blue-700 font-medium"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Search Button */}
            <div className="md:col-span-1 flex items-end">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center">
                <Search size={18} className="mr-2" />
                Search
              </button>
            </div>
          </div>

          {/* Additional Options */}
          <div className="flex items-center text-sm text-gray-600">
            <label className="flex items-center space-x-2 mr-4">
              <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
              <span>Direct flights only</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
              <span>Flexible dates</span>
            </label>
          </div>
        </>
      )}
    </div>
  );
}