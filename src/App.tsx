import Header from "./components/Header";
import FoodListing from "./components/FoodListing";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import FoodDetail from "./components/FoodDetail.tsx";
import NewUser from "./components/NewUser.tsx";
import Review from "./components/Review.tsx";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Login from "./components/Login.tsx";
import HideRoutes from "./routes/HideRoutes.tsx";
import Logout from "./components/Logout.tsx";
import CartListing from "./components/CartListing.tsx";
import OrderListing from "./components/OrderListing.tsx";

function App() {
    return (
        <BrowserRouter>
        <div>
        <Header/>
        <Routes>
            <Route path="/" element={<FoodListing/>} />
            <Route path="/restaurant/:id" element={<FoodDetail/>}/>

            <Route element={<HideRoutes/>}>
            <Route path="/user/register" element={<NewUser/>}/>
            </Route>

            <Route element={<HideRoutes/>}>
                <Route path="/user/login" element={<Login/>}/>
            </Route>

            <Route element={<ProtectedRoutes/>}>
                <Route path="/review" element={<Review/>}/>
            </Route>

            <Route element={<ProtectedRoutes/>}>
                <Route path="/cart" element={<CartListing/>}/>
            </Route>

            <Route element={<ProtectedRoutes/>}>
                <Route path="/orders" element={<OrderListing/>}/>
            </Route>

            <Route path="/user/logout" element={<Logout/>}/>


        </Routes>
        </div>
        </BrowserRouter>
    )
}

export default App
