import { Routes, Route } from 'react-router-dom';
import ProtectedRoutes from '../ProtectedRoutes';
import CartListing from "../../components/CartListing.tsx";
import OrderListing from "../../components/Order/OrderListing.tsx";
import OrderDetail from "../../components/Order/OrderDetail.tsx";
import OrderDeliverInfoListing from "../../components/Order/OrderDeliverInfoListing.tsx";

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
            <Route element={<ProtectedRoutes/>}>
                <Route path="/order/deliveries/:id" element={<OrderDeliverInfoListing/>}/>
            </Route>
        </Routes>
    );
};

export default CartRoutes;