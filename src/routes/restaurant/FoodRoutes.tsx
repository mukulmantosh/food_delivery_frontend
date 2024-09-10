import {Route, Routes} from "react-router-dom";
import FoodListing from "../../components/FoodListing.tsx";
import FoodDetail from "../../components/FoodDetail.tsx";


const FoodRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<FoodListing/>} />
            <Route path="/restaurant/:id" element={<FoodDetail/>}/>
        </Routes>
    )
}
export default FoodRoutes;