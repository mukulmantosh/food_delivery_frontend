import {Navigate, Outlet} from "react-router-dom";
import useAuth from "../context/auth.tsx";

// hide routes once user is successfully logged in.

const HideRoutes = () => {
    const { isAuthenticated } = useAuth();

    return !isAuthenticated ? <Outlet/> : <Navigate to="/"/>
}

export default HideRoutes;