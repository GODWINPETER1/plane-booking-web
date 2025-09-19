import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { loadAirports, addAirport, editAirport, removeAirport } from '../features/airports/airportSlice';
import type { Airport } from '../features/airports/types';
import AirportForm from '../components/AirportForm';

export default function AirportPage() {
  const dispatch = useAppDispatch()
  const { items, loading } = useAppSelector((s) => s.airports);
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [editing, setEditing] = useState<Airport | null>(null);
  console.log(items)

  useEffect(() => {
    dispatch(loadAirports({q: search }));
  }, [dispatch, search]);

  const handleAdd = async (data: any) => {
    if (editing) {
      await dispatch(editAirport({ id: editing.id, data }));
      setEditing(null);
    } else {
      await dispatch(addAirport(data));
    }
    setIsOpen(false);
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Airports</h1>
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Add Airport
        </button>
      </div>

      <div className="mb-4 flex gap-3">
        <input
          placeholder="Search airports..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {loading ? (
        <div className="flex justify-center py-10">Loading...</div>
      ) : (
        <div className="overflow-x-auto bg-white rounded-xl shadow">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-4 py-2">Code</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">City</th>
                <th className="px-4 py-2">Country</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items?.map((airport) => (
                <tr key={airport.id} className="border-t">
                  <td className="px-4 py-2 font-medium">{airport.code}</td>
                  <td className="px-4 py-2">{airport.name}</td>
                  <td className="px-4 py-2">{airport.city}</td>
                  <td className="px-4 py-2">{airport.country}</td>
                  <td className="px-4 py-2 flex gap-2">
                    <button
                      onClick={() => {
                        setEditing(airport);
                        setIsOpen(true);
                      }}
                      className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => dispatch(removeAirport(airport.id))}
                      className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {(isOpen || editing) && (
        <AirportForm
          isOpen={isOpen}
          onClose={() => {
            setEditing(null);
            setIsOpen(false);
          }}
          onSubmit={handleAdd}
          initial={editing || {}}
        />
      )}
    </div>
  );
}