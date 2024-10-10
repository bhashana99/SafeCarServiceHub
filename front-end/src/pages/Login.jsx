import React from "react";
import '../style/loginPage.css';

export default function Login() {
  return (
    <div className="body__container">
      <h1>Vehicle Service Reservation</h1>
      <h3>Please Log in to continue...</h3>
      <form>
        <div className="login__container">
          <input
            type="submit"
            value="Log in"
            id="submit__btn"
          />
        </div>
      </form>
    </div>
  );
}
