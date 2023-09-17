import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../Styles/CheckOut.css"


export const Checkout = (props) => {

    const navigate = useNavigate();
    const [carsList, setCarsList] = useState([
        require("../images/aventador-coupe.png"),
        require("../images/bugatti-veyron.png"),
        require("../images/mcLarenPng.png"),
        require("../images/AstonMartinVantage.png"),
        require("../images/Ferrari488.png")
    ])
    const [carsNames, setCarsNames] = useState([
        "Lamborghini Aventador",
        "Bugatti Veyron",
        "McLaren P1",
        "Aston Martin Vantage",
        "Ferrari 488"
    ])
    const [carouselNum, setCarouselNum] = useState(0);
    const [carPrice, setCarPrice] = useState([5000, 4500, 7000, 3500, 4000])


    return <div className="check-out-page">
        <div className="left-side-checkout">
            <div className="top-nav">
                <div className="progress-div">
                    <h2 className="check-out-progress progress-1 filled-out"> 1 </h2>
                    <p className="progress-info"> Payment Information</p>
                </div>
                <div className="progres-line"></div>
                <div className="progress-div">
                    <h2 className="check-out-progress progress-2"> 2 </h2>
                    <p className="progress-info"> Delivery Location</p>
                </div>
                <div className="progres-line"></div>
                <div className="progress-div">
                    <h2 className="check-out-progress progress-3"> 3 </h2>
                    <p className="progress-info"> Confirm Information</p>
                </div>
            </div>
        </div>
        <div className="right-side-checkout">
            <div className="info-box-checkout">
                <h1 style={{color: "black"}}> Order Summary </h1>
            </div>
        </div>
    </div>
}
