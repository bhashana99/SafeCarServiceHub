import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function reservationDetails() {
  const location = useLocation();
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const username = location.state?.username;
    const fetchReservation = async () => {
      try {
        const res = await fetch(
          `http://localhost:8080/api/reservations/get-all-reservations/${username}`
        );
        const data = await res.json();
        setReservations(data);
console.log(data);
        console.log(reservations);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReservation();
  }, []);

  return (
    <div>reservation</div>
  );
}
