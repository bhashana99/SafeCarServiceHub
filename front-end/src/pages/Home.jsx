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
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Welcome to Vehicle Service Reservation
        </h1>

        {state.isAuthenticated && (
          <div className="space-y-4 mb-6">
            {basicUserDetails.success && (
              <div className="text-green-600 text-center mb-4">
                {basicUserDetails.success}
              </div>
            )}

            <div className="border-b pb-4">
              <h2 className="text-xl font-semibold mb-2">User Information</h2>
              <p><span className="font-semibold">Username:</span> {basicUserDetails.username}</p>
              <p><span className="font-semibold">Name:</span> {basicUserDetails.displayName}</p>
              <p><span className="font-semibold">Email:</span> {basicUserDetails.email}</p>
              <p><span className="font-semibold">Mobile:</span> {basicUserDetails.phoneNumber}</p>
              <p><span className="font-semibold">Country:</span> {basicUserDetails.address?.country}</p>
            </div>

            <div className="flex flex-col space-y-2">
              <button
                onClick={() => navigate("/create-reservation", { state: { username: basicUserDetails.username } })}
                className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Reserve a Service
              </button>
              <button
                onClick={() => navigate("/reservation-details", { state: { username: basicUserDetails.username } })}
                className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                My Reservation Details
              </button>
             
            </div>

            <button
              onClick={handleLogout}
              className="w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
