import {Route, Routes} from "react-router-dom";
import ProtectedRoutes from "../ProtectedRoutes.tsx";
import Review from "../../components/Review.tsx";


const ReviewRoutes = () => {
    return (
        <Routes>
            <Route element={<ProtectedRoutes/>}>
                <Route path="/review" element={<Review/>}/>
            </Route>
        </Routes>
    )
}

export default ReviewRoutes;