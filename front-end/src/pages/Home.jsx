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
          console.log(basicUserDetails); // Log to inspect structure
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
    <div className="body__container">
      <h1>Vehicle Service Reservation</h1>

      {state.isAuthenticated && (
        <div className="details">
          {basicUserDetails.success && (
            <div className="success-message" style={{ color: "green" }}>
              {basicUserDetails.success}
            </div>
          )}

          <div className="details__list">
            <p><span>Username:</span> {basicUserDetails.username}</p>
            <p><span>Email:</span> {basicUserDetails.email || "Not available"}</p>
            <p><span>Mobile:</span> {basicUserDetails.phoneNumber}</p>
            <p><span>Country:</span> {basicUserDetails.address?.country || "Not available"}</p>
          </div>

          <a href="/service-reservation-form">Reserve a service</a> <br />
          <a href="/reservation-details">My Reservation Details</a> <br />
          <a href="/delete-upcoming-reservations">Delete upcoming reservations</a> <br />

          <br/><br/>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}
