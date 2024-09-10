import {Route, Routes} from "react-router-dom";
import HideRoutes from "../HideRoutes.tsx";
import NewUser from "../../components/NewUser.tsx";
import Login from "../../components/Login.tsx";
import Logout from "../../components/Logout.tsx";


const UserRoutes = () => {
    return (
        <Routes>
            <Route element={<HideRoutes/>}>
                <Route path="/register" element={<NewUser/>}/>
            </Route>

            <Route element={<HideRoutes/>}>
                <Route path="/login" element={<Login/>}/>
            </Route>

            <Route path="/logout" element={<Logout/>}/>


        </Routes>
    )
}
export default UserRoutes;