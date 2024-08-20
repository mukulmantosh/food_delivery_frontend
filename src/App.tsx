import Header from "./components/Header";
import FoodListing from "./components/FoodListing";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FoodDetail from "./components/FoodDetail.tsx";


function App() {
    return (
        <Router>
        <div>
        <Header/>
            <Routes>
        <Route path="/" element={<FoodListing/>} />
        <Route path="/restaurant/:id" element={<FoodDetail/>}/>
            </Routes>
        </div>
        </Router>
    )
}

export default App
