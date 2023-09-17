import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./Routes/LandingPage";
import { CarView } from "./Routes/CarView";
import { Checkout } from "./Routes/CheckOut";
import { useState } from "react";


export  const BrowserRouters = () => {

    const [selectedCar, setSelectedCar] = useState(0);

    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/car-view" element={<CarView changeSelectedCar={setSelectedCar}/>}/>
            <Route path="check-out" element={<Checkout selectedCar={selectedCar}/>}/>
        </Routes>
    </BrowserRouter>
}
