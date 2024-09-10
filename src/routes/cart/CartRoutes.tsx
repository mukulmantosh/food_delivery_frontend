import { Routes, Route } from 'react-router-dom';
import ProtectedRoutes from '../ProtectedRoutes';
import CartListing from "../../components/CartListing.tsx";
import OrderListing from "../../components/Order/OrderListing.tsx";
import OrderDetail from "../../components/Order/OrderDetail.tsx";

const CartRoutes = () => {
    return (
        <Routes>
            <Route element={<ProtectedRoutes/>}>
                <Route path="/" element={<CartListing/>}/>
            </Route>

            <Route element={<ProtectedRoutes/>}>
                <Route path="/orders" element={<OrderListing/>}/>
            </Route>

            <Route element={<ProtectedRoutes/>}>
                <Route path="/order/:id" element={<OrderDetail/>}/>
            </Route>
        </Routes>
    );
};

export default CartRoutes;