import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartRoutes from "./routes/cart/CartRoutes";
import FoodRoutes from "./routes/restaurant/FoodRoutes";
import UserRoutes from "./routes/user/UserRoutes";
import ReviewRoutes from "./routes/review/ReviewRoutes";
import {WebSocketProvider} from './context/WebSocketContext'
import useFlashEvents from "./events/flashEvents";
import {API_BASE_URL} from "./utils/urls.ts";
function App() {
    useFlashEvents(API_BASE_URL + '/announcements/events');


    return (
        <BrowserRouter>
        <div>
        <Header/>
            <WebSocketProvider>
            <Routes>
            <Route path="/*" element={<FoodRoutes />} />
            <Route path="/user/*" element={<UserRoutes />} />
            <Route path="/review/*" element={<ReviewRoutes />} />
            <Route path="/cart/*" element={<CartRoutes />} />
            </Routes>
            </WebSocketProvider>
        </div>
        </BrowserRouter>

    )
}

export default App
