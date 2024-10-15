import React, { useEffect, useState } from "react";
import { useAuthContext } from "@asgardeo/auth-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { state, signOut, getBasicUserInfo } = useAuthContext();
  const navigate = useNavigate();
  const [basicUserDetails, setBasicUserDetails] = useState({});

  useEffect(() => {
    if (state.isAuthenticated) {
      getBasicUserInfo()
        .then((basicUserDetails) => {
          setBasicUserDetails(basicUserDetails);
          console.log(basicUserDetails);
        })
        .catch((error) => {
          console.error("Failed to fetch user info:", error);
        });
    }
  }, [state.isAuthenticated, getBasicUserInfo]);

  useEffect(() => {
    if (!state.isAuthenticated) {
      navigate("/login");
    }
  }, [state.isAuthenticated, navigate]);

  const handleLogout = async () => {
    await signOut();
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400 p-4">
      <h1 className="text-3xl font-bold text-black  text-center  p-5">
        <span className="text-5xl">Welcome</span> <br /> to Vehicle Service
        Reservation
      </h1>

      {state.isAuthenticated && (
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
          {basicUserDetails.success && (
            <div className="text-green-600 mb-4">
              {basicUserDetails.success}
            </div>
          )}

          <div className="space-y-2 mb-4">
            <p>
              <span className="font-semibold">Username:</span>{" "}
              {basicUserDetails.username}
            </p>
            <p>
              <span className="font-semibold">Name:</span>{" "}
              {basicUserDetails.displayName}
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              {basicUserDetails.email}
            </p>
            <p>
              <span className="font-semibold">Mobile:</span>{" "}
              {basicUserDetails.phoneNumber}
            </p>
            <p>
              <span className="font-semibold">Country:</span>{" "}
              {basicUserDetails.address?.country}
            </p>
          </div>

          <div className="space-y-2 mb-4">
            <a
              href="/create-reservation"
              className="block w-full py-2 bg-blue-600 text-white text-center rounded hover:bg-blue-700 transition"
            >
              Reserve a service
            </a>
            <a
              href="/reservation-details"
              className="block w-full py-2 bg-blue-600 text-white text-center rounded hover:bg-blue-700 transition"
            >
              My Reservation Details
            </a>
            <a
              href="/delete-reservations"
              className="block w-full py-2 bg-blue-600 text-white text-center rounded hover:bg-blue-700 transition"
            >
              Delete upcoming reservations
            </a>
          </div>

          <button
            onClick={handleLogout}
            className="w-full py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
