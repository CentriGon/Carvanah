import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./Routes/LandingPage";


export  const BrowserRouters = () => {

    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
        </Routes>
    </BrowserRouter>
}
