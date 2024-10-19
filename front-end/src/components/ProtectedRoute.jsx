import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthContext } from '@asgardeo/auth-react'

export default function ProtectedRoute({children}) {

    const {state} = useAuthContext();

    if (state.isAuthenticated) {
        return children;
    } else {
        return <Navigate to="/login" />
    }
  
}
