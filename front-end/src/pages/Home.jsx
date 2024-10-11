import React, {useEffect} from "react";
import { useAuthContext } from "@asgardeo/auth-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { state, signOut } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.isAuthenticated) {
      navigate("/login");
    }
  }, [state.isAuthenticated]);
  
  const handleLogout = async () => {
    await signOut();
    navigate("/login");
  };
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
