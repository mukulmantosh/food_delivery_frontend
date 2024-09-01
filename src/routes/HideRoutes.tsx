import {Navigate, Outlet} from "react-router-dom";
import useAuth from "../context/auth.tsx";

const HideRoutes = () => {
    // hide routes once user is successfully logged in.
    const isAuthenticated  = useAuth();

    return !isAuthenticated ? <Outlet/> : <Navigate to="/"/>
}

export default HideRoutes;