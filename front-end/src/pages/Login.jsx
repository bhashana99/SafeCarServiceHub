import React, { useEffect } from "react";
import '../index.css';
import { useAuthContext } from "@asgardeo/auth-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const { state, signIn } = useAuthContext();
    const navigate = useNavigate();

    const handleSign = async (event) => {

        event.preventDefault();
        try {
            await signIn();
        } catch (error) {
            console.error("Error during sign-in:", error);
           
        }
       
    };

    
    useEffect(() => {
        if (state.isAuthenticated) {
            navigate('/');
            
        }
    }, [state.isAuthenticated,navigate]); 

    return (
        <div className="body__container">
            <h1>Vehicle Service Reservation</h1>
            <h3>Please Log in to continue...</h3>
            <form>
                <div className="login__container">
                    <button id="submit__btn" onClick={handleSign}>Login</button>
                </div>
            </form>
        </div>
    );
}
