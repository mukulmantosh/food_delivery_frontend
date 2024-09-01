import useAuth from "../context/auth.tsx";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";


function Logout() {
    const navigate = useNavigate();

    const { logout } = useAuth();
    logout()

    useEffect(() => {
        navigate("/")
    }, [navigate]);

    return null;

}
export default Logout;