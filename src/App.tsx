import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartRoutes from "./routes/cart/CartRoutes.tsx";
import FoodRoutes from "./routes/restaurant/FoodRoutes.tsx";
import UserRoutes from "./routes/user/UserRoutes.tsx";
import ReviewRoutes from "./routes/review/ReviewRoutes.tsx";

function App() {
    return (
        <BrowserRouter>
        <div>
        <Header/>
        <Routes>
            <Route path="/*" element={<FoodRoutes />} />
            <Route path="/user/*" element={<UserRoutes />} />
            <Route path="/review/*" element={<ReviewRoutes />} />
            <Route path="/cart/*" element={<CartRoutes />} />
        </Routes>
        </div>
        </BrowserRouter>
    )
}

export default App
