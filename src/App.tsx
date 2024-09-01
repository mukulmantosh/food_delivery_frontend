import Header from "./components/Header";
import FoodListing from "./components/FoodListing";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import FoodDetail from "./components/FoodDetail.tsx";
import NewUser from "./components/NewUser.tsx";
import Review from "./components/Review.tsx";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Login from "./components/Login.tsx";
import HideRoutes from "./routes/HideRoutes.tsx";
import Logout from "./components/Logout.tsx";

function App() {
    return (
        <AuthProvider>
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

            <Route path="/user/logout" element={<Logout/>}/>


        </Routes>
        </div>
        </BrowserRouter>
        </AuthProvider>
    )
}

export default App
