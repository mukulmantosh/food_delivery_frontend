import {Navigate, Outlet} from "react-router-dom";
import useAuth from "../context/auth.tsx";

const ProtectedRoutes = () => {
    const isAuthenticated  = useAuth();

    return isAuthenticated ? <Outlet/> : <Navigate to="/"/>
}

export default ProtectedRoutes;