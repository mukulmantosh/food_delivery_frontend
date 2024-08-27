import Header from "./components/Header";
import FoodListing from "./components/FoodListing";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import FoodDetail from "./components/FoodDetail.tsx";
import NewUser from "./components/NewUser.tsx";
import Review from "./components/Review.tsx";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Login from "./components/Login.tsx";

function App() {
    return (
        <AuthProvider>
        <BrowserRouter>
        <div>
        <Header/>
        <Routes>
            <Route path="/" element={<FoodListing/>} />
            <Route path="/restaurant/:id" element={<FoodDetail/>}/>
            <Route path="/user/register" element={<NewUser/>}/>
            <Route path="/user/login" element={<Login/>}/>

            <Route element={<ProtectedRoutes/>}>
                <Route path="/review" element={<Review/>}/>
            </Route>
        </Routes>
        </div>
        </BrowserRouter>
        </AuthProvider>
    )
}

export default App
