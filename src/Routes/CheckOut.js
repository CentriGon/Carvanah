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
    const [currentInfo, setCurrentInfo] = useState(0)
    const [carouselNum, setCarouselNum] = useState(0);
    const [carPrice, setCarPrice] = useState([5000, 4500, 7000, 3500, 4000])
    const [creditCardNum, setCreditCardNum] = useState()
    const [creditCardExp, setCreditCardExp] = useState()
    const [creditCardSec, setCreditCardSec] = useState()
    const [addressLineOne, setAddressLineOne] = useState()
    const [addressLineTwo, setAddressLineTwo] = useState()
    const [city, setCity] = useState()
    const [state, setState] = useState()
    const [country, setCountry] = useState()
    


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
            <div className="current-info">
                { currentInfo == 0 ? <div className="payment-information">
                    <div className="payment-info-label">
                        <label for="credit-card-number"> Credit Card Number </label>
                        <input type="number" id="credit-card-number" onChange={(e) => {setCreditCardNum(e.target.value)}}/>
                    </div>
                    <div className="extra-info-card">
                        <div className="payment-info-label">
                            <label for="exp-date"> Expiration Date </label>
                            <input type="number" id="exp-date" onChange={(e) => {setCreditCardExp(e.target.value)}}/>
                        </div>
                        <div className="payment-info-label">
                            <label for="sec-code"> Security Code </label>
                            <input type="number" id="sec-code" onChange={(e) => {setCreditCardSec(e.target.value)}}/>
                        </div>
                    </div>
                    <button onClick={() => {setCurrentInfo(prevNum => prevNum+1)}} className="next-info"> Next </button>
                </div> : <div className="second-layer">
                    { currentInfo == 1 ? <div className="delivery-information">
                        <div className="address-lines">
                            <div className="address-info-label">
                                <label for="address-line-1"> Address Line 1 </label>
                                <input type="text" id="address-line-1" onChange={(e) => {setAddressLineOne(e.target.value)}}/>
                            </div>
                            <div className="address-info-label">
                                <label for="address-line-2"> Address Line 2 </label>
                                <input type="text" id="address-line-2" onChange={(e) => {setAddressLineTwo(e.target.value)}}/>
                            </div>
                        </div>
                        <div className="address-info-label">
                                <label for="country"> Country </label>
                                <input type="text" id="country" onChange={(e) => {setCountry(e.target.value)}}/>
                        </div>
                        <div className="city-state">
                            <div className="address-info-label">
                                <label for="city"> City </label>
                                <input type="text" id="city" onChange={(e) => {setCity(e.target.value)}}/>
                            </div>
                            <div className="address-info-label">
                                <label for="state"> State </label>
                                <input type="text" id="state" onChange={(e) => {setState(e.target.value)}}/>
                            </div>
                        </div>
                        <div className="buttons">
                            <button onClick={() => {setCurrentInfo(prevNum => prevNum-1)}} className="next-info"> Back </button>
                            <button onClick={() => {setCurrentInfo(prevNum => prevNum+1)}} className="next-info"> Next </button>
                        </div>
                    </div> : <div className="confirm-info">
                        <h2> {creditCardNum}</h2>
                        <div className="buttons">
                            <button onClick={() => {setCurrentInfo(prevNum => prevNum-1)}} className="next-info"> Back </button>
                            <button onClick={() => {setCurrentInfo(prevNum => prevNum+1)}} className="next-info"> Next </button>
                        </div>
                        </div>}
                </div>}
            </div>
        </div>
        <div className="right-side-checkout">
            <div className="info-box-checkout">
                <h1 style={{color: "black", fontSize: 28 + "px", width: 90 + "%"}}> Order Summary </h1>
                <div className="line" style={{width: 90 + "%"}}></div>
                <div className="price-info">
                    <h3> {`Car Price:  $${carPrice[props.selectedCar]}`}</h3>
                    <h3> {`Tax: $${carPrice[props.selectedCar] * 0.05}`}</h3>
                    <div className="line"></div>
                    <h3> {`Total: $${carPrice[props.selectedCar] + carPrice[props.selectedCar] * 0.05}`}</h3>
                </div>
            </div>
        </div>
    </div>
}
