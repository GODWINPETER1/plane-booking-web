import React, { useEffect, useState } from 'react';
import type { Airport, CreateAirportDTO } from '../features/airports/types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: CreateAirportDTO) => Promise<any>;
  initial?: Partial<Airport>;
}

export default function AirportForm({ isOpen, onClose, onSubmit, initial = {} }: Props) {
  const [code, setCode] = useState(initial.code || '');
  const [name, setName] = useState(initial.name || '');
  const [city, setCity] = useState(initial.city || '');
  const [country, setCountry] = useState(initial.country || '');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCode(initial.code || '');
    setName(initial.name || '');
    setCity(initial.city || '');
    setCountry(initial.country || '');
  }, [initial, isOpen]);

  const submit = async () => {
    setLoading(true);
    try {
      await onSubmit({ code, name, city, country });
      onClose();
    } catch (err: any) {
      alert(err?.message || 'Error saving airport');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
        <h2 className="text-xl font-bold mb-4">{initial?.id ? 'Edit Airport' : 'Add Airport'}</h2>

        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1">IATA Code</label>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              maxLength={3}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. JFK"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
              placeholder="John F. Kennedy International"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
              placeholder="New York"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Country</label>
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
              placeholder="USA"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">
            Cancel
          </button>
          <button
            onClick={submit}
            disabled={loading}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
}