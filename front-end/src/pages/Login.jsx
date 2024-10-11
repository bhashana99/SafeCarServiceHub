import React, { useEffect } from "react";
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
    }, [state.isAuthenticated, navigate]); 

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-600">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">Vehicle Service Reservation</h1>
                <h3 className="text-gray-600 text-center mb-6">Please Log in to continue...</h3>
                <form onSubmit={handleSign} className="space-y-4">
                    <div className="flex flex-col">
                        <button 
                            type="submit"
                            className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
