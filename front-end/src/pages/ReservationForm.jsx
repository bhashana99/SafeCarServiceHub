import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function ReservationForm() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    username: location.state?.username || "",
    date: "",
    time: "10 AM",
    location: "",
    registrationNumber: "",
    mileage: "",
    message: "",
  });

  const isValidDate = (date) => {
    const selectedDate = new Date(date);
    const today = new Date();
    const dayOfWeek = selectedDate.getDay(); 
    return selectedDate > today && dayOfWeek !== 0; 
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!isValidDate(formData.date)) {
      newErrors.date = "Please select a valid date (after today, excluding Sundays).";
    }

    if (!formData.location) {
      newErrors.location = "Please select a location.";
    }

    if (!formData.registrationNumber) {
      newErrors.registrationNumber = "Please enter your vehicle registration number.";
    }

    if (!formData.mileage || formData.mileage <= 0) {
      newErrors.mileage = "Please enter a valid mileage.";
    }

    if (Object.keys(newErrors).length === 0) {
      try {
        const res = await fetch("http://localhost:8080/api/reservations/create-reservation", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (data.success === false) {
          alert(data.message);
        } else {
          alert("Reservation created successfully!");
          navigate("/");
        }

      } catch (error) {
        console.log(error);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-8 flex items-center justify-center">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-6 w-full max-w-lg space-y-4">
        <div className="flex items-center mb-6">
          <button
            onClick={() => navigate("/")}
            className="mr-5 p-2 rounded-full bg-green-500 hover:bg-gray-300 transition"
          >
            <AiOutlineArrowLeft className="text-gray-700" />
          </button>
          <h1 className="text-3xl font-semibold text-gray-800">Book A Service</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={formData.username}
              className="block w-full p-2 border border-gray-300 rounded"
              readOnly
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1" htmlFor="date">
              Date of Service
            </label>
            <input
              type="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              className={`block w-full p-2 border ${errors.date ? "border-red-500" : "border-gray-300"} rounded`}
              required
            />
            {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
          </div>

          <div>
            <label className="block text-gray-700 mb-1" htmlFor="time">
              Preferred Time
            </label>
            <select
              id="time"
              className="block w-full p-2 border border-gray-300 rounded"
              value={formData.time}
              onChange={handleChange}
            >
              <option value="10 AM">10 AM</option>
              <option value="11 AM">11 AM</option>
              <option value="12 PM">12 PM</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-1" htmlFor="location">
              Preferred Location
            </label>
            <select
              id="location"
              value={formData.location}
              onChange={handleChange}
              className={`block w-full p-2 border ${errors.location ? "border-red-500" : "border-gray-300"} rounded`}
              required
            >
              <option value="">Select a district</option>
              <option value="Colombo">Colombo</option>
              <option value="Gampaha">Gampaha</option>
              <option value="Kandy">Kandy</option>
              <option value="Matara">Matara</option>
              <option value="Kurunegala">Kurunegala</option>
            </select>
            {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
          </div>

          <div>
            <label className="block text-gray-700 mb-1" htmlFor="registrationNumber">
              Vehicle Registration Number
            </label>
            <input
              type="text"
              id="registrationNumber"
              value={formData.registrationNumber}
              onChange={handleChange}
              className={`block w-full p-2 border ${errors.registrationNumber ? "border-red-500" : "border-gray-300"} rounded`}
              required
            />
            {errors.registrationNumber && <p className="text-red-500 text-sm">{errors.registrationNumber}</p>}
          </div>

          <div>
            <label className="block text-gray-700 mb-1" htmlFor="mileage">
              Current Mileage
            </label>
            <input
              type="number"
              id="mileage"
              value={formData.mileage}
              onChange={handleChange}
              className={`block w-full p-2 border ${errors.mileage ? "border-red-500" : "border-gray-300"} rounded`}
              required
            />
            {errors.mileage && <p className="text-red-500 text-sm">{errors.mileage}</p>}
          </div>

          <div>
            <label className="block text-gray-700 mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="block w-full p-2 border border-gray-300 rounded"
              rows="4"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Submit Reservation
          </button>
        </form>
      </div>
    </div>
  );
}
