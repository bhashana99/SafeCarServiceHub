import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ReservationDetails() {
  const location = useLocation();
  const [reservations, setReservations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const username = location.state?.username;
    const fetchReservation = async () => {
      try {
        const res = await fetch(
          `http://localhost:8080/api/reservations/get-all-reservations/${username}`
        );
        const data = await res.json();
        setReservations(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReservation();
  }, [location.state?.username]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this reservation?");
    if (confirmDelete) {
      try {
        await fetch(`http://localhost:8080/api/reservations/delete-reservation/${id}`, {
          method: "DELETE",
        });
        setReservations(reservations.filter((reservation) => reservation.id !== id));
      } catch (error) {
        console.log(error);
      }
    }
  };

  
  const currentDate = new Date();

  const upcomingReservations = reservations.filter(reservation => new Date(reservation.date) >= currentDate);
  const pastReservations = reservations.filter(reservation => new Date(reservation.date) < currentDate);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Reservation Details
        </h2>

      
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Upcoming Reservations</h3>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 text-left text-gray-700 border border-gray-300">Date</th>
                <th className="px-4 py-2 text-left text-gray-700 border border-gray-300">Time</th>
                <th className="px-4 py-2 text-left text-gray-700 border border-gray-300">Location</th>
                <th className="px-4 py-2 text-left text-gray-700 border border-gray-300">Registration Number</th>
                <th className="px-4 py-2 text-left text-gray-700 border border-gray-300">Mileage</th>
                <th className="px-4 py-2 text-left text-gray-700 border border-gray-300">Message</th>
                <th className="px-4 py-2 text-left text-gray-700 border border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {upcomingReservations.length > 0 ? upcomingReservations.map((reservation) => (
                <tr key={reservation.id} className="odd:bg-white even:bg-gray-100">
                  <td className="px-4 py-2 border border-gray-300">{reservation.date}</td>
                  <td className="px-4 py-2 border border-gray-300">{reservation.time}</td>
                  <td className="px-4 py-2 border border-gray-300">{reservation.location}</td>
                  <td className="px-4 py-2 border border-gray-300">{reservation.registrationNumber}</td>
                  <td className="px-4 py-2 border border-gray-300">{reservation.mileage}</td>
                  <td className="px-4 py-2 border border-gray-300">{reservation.message || "N/A"}</td>
                  <td className="px-4 py-2 border border-gray-300">
                    <button
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 focus:outline-none"
                      onClick={() => handleDelete(reservation.id)}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              )) : <tr><td colSpan="7" className="text-center py-4">No upcoming reservations</td></tr>}
            </tbody>
          </table>
        </div>

        
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Past Reservations</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 text-left text-gray-700 border border-gray-300">Date</th>
                <th className="px-4 py-2 text-left text-gray-700 border border-gray-300">Time</th>
                <th className="px-4 py-2 text-left text-gray-700 border border-gray-300">Location</th>
                <th className="px-4 py-2 text-left text-gray-700 border border-gray-300">Registration Number</th>
                <th className="px-4 py-2 text-left text-gray-700 border border-gray-300">Mileage</th>
                <th className="px-4 py-2 text-left text-gray-700 border border-gray-300">Message</th>
              </tr>
            </thead>
            <tbody>
              {pastReservations.length > 0 ? pastReservations.map((reservation) => (
                <tr key={reservation.id} className="odd:bg-white even:bg-gray-100">
                  <td className="px-4 py-2 border border-gray-300">{reservation.date}</td>
                  <td className="px-4 py-2 border border-gray-300">{reservation.time}</td>
                  <td className="px-4 py-2 border border-gray-300">{reservation.location}</td>
                  <td className="px-4 py-2 border border-gray-300">{reservation.registrationNumber}</td>
                  <td className="px-4 py-2 border border-gray-300">{reservation.mileage}</td>
                  <td className="px-4 py-2 border border-gray-300">{reservation.message || "N/A"}</td>
                </tr>
              )) : <tr><td colSpan="6" className="text-center py-4">No past reservations</td></tr>}
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
