import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai"; 

export default function ReservationForm({ }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400 p-4">
      <div className="flex items-center mb-6">
        <button onClick={()=> navigate("/")} className="mr-5 p-2 rounded-full bg-green-500 hover:bg-gray-300 transition">
          <AiOutlineArrowLeft className="text-gray-700" />
        </button>
        <h1 className="text-2xl font-bold text-gray-800">Book A Service</h1>
      </div>
      <form className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg space-y-4">
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="date">
            Date of Service
          </label>
          <input
            type="date"
            id="date"
            className="block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="time">
            Preferred Time
          </label>
          <select
            id="time"
            className="block w-full p-2 border border-gray-300 rounded"
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
            className="block w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select a district</option>
            <option value="Colombo">Colombo</option>
            <option value="Gampaha">Gampaha</option>
            <option value="Kandy">Kandy</option>
            <option value="Matara">Matara</option>
            <option value="Kurunegala">Kurunegala</option>
    
          </select>
        </div>
        <div>
          <label
            className="block text-gray-700 mb-1"
            htmlFor="registrationNumber"
          >
            Vehicle Registration Number
          </label>
          <input
            type="text"
            id="registrationNumber"
            className="block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="mileage">
            Current Mileage
          </label>
          <input
            type="number"
            id="mileage"
            className="block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="block w-full p-2 border border-gray-300 rounded"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Submit Reservation
        </button>
      </form>
    </div>
  );
}
