import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./Routes/LandingPage";
import { CarView } from "./Routes/CarView";


export  const BrowserRouters = () => {

    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/car-view" element={<CarView />}/>
        </Routes>
    </BrowserRouter>
}
