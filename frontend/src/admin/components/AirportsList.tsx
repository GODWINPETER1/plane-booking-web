// src/components/AirportsList.tsx
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  fetchAirports,
  deleteAirport,
  selectAirports,
  selectAirportsLoading,
  selectAirportsError,
} from "../features/airports/airportSlice";
import AirportForm from "./AirportForm";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";

export default function AirportsList() {
  const dispatch = useAppDispatch();
  const airports = useAppSelector(selectAirports) || [];
  const loading = useAppSelector(selectAirportsLoading);
  const error = useAppSelector(selectAirportsError);

  const [editingAirportId, setEditingAirportId] = useState<string | null>(null);
  const [showCreate, setShowCreate] = useState(false);

  useEffect(() => {
    dispatch(fetchAirports());
  }, [dispatch]);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Airports</h2>
        <Dialog open={showCreate} onOpenChange={setShowCreate}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              + Add Airport
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Add Airport</DialogTitle>
            </DialogHeader>
            <AirportForm onClose={() => setShowCreate(false)} />
          </DialogContent>
        </Dialog>
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
          {error}
        </div>
      )}

      {/* Airports Table */}
      <Card className="overflow-x-auto">
        {loading ? (
          <p className="p-4 text-center">Loading airports...</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Code</TableHead>
                <TableHead>City</TableHead>
                <TableHead>Country</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {airports.map((airport) => (
                <TableRow key={airport.id}>
                  <TableCell>{airport.name}</TableCell>
                  <TableCell>{airport.code}</TableCell>
                  <TableCell>{airport.city}</TableCell>
                  <TableCell>{airport.country}</TableCell>
                  <TableCell className="text-right space-x-2">
                    <Dialog open={editingAirportId === airport.id} onOpenChange={(open) => !open && setEditingAirportId(null)}>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" onClick={() => setEditingAirportId(airport.id)}>
                          Edit
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <DialogHeader>
                          <DialogTitle>Edit Airport</DialogTitle>
                        </DialogHeader>
                        <AirportForm initialData={airport} onClose={() => setEditingAirportId(null)} />
                      </DialogContent>
                    </Dialog>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => {
                        if (window.confirm("Are you sure you want to delete this airport?")) {
                          dispatch(deleteAirport(airport.id));
                        }
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </Card>
    </div>
  );
}
