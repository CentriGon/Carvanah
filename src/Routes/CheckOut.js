import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
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
    

    useEffect(() => {
        console.log("chnaged")
        if (currentInfo >= 1) {
            document.querySelector(".progress-2").setAttribute("id", "filled-out")
        }
        else {
            document.querySelector(".progress-2").removeAttribute("id")
        }
        if (currentInfo >= 2) {
            document.querySelector(".progress-3").setAttribute("id", "filled-out")
        }
        else {
            document.querySelector(".progress-3").removeAttribute("id")
        }
    }, [currentInfo])

    return <div className="check-out-page">
        <div className="left-side-checkout">
            <div className="top-nav">
                <div className="progress-div">
                    <h2 className="check-out-progress progress-1" id="filled-out"> 1 </h2>
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
                        <input type="number" required id="credit-card-number" defaultValue={creditCardNum} onChange={(e) => {setCreditCardNum(e.target.value)}}/>
                    </div>
                    <div className="extra-info-card">
                        <div className="payment-info-label">
                            <label for="exp-date"> Expiration Date </label>
                            <input type="number"requiredid="exp-date" defaultValue={creditCardExp} onChange={(e) => {setCreditCardExp(e.target.value)}}/>
                        </div>
                        <div className="payment-info-label">
                            <label for="sec-code"> Security Code </label>
                            <input type="number" required id="sec-code" defaultValue={creditCardSec} onChange={(e) => {setCreditCardSec(e.target.value)}}/>
                        </div>
                    </div>
                    <button onClick={() => {setCurrentInfo(prevNum => prevNum+1)}} className="next-info"> Next </button>
                </div> : <div className="second-layer">
                    { currentInfo == 1 ? <div className="delivery-information">
                        <div className="address-lines">
                            <div className="address-info-label">
                                <label for="address-line-1"> Address Line 1 </label>
                                <input type="text" required id="address-line-1" defaultValue={addressLineOne} onChange={(e) => {setAddressLineOne(e.target.value)}}/>
                            </div>
                            <div className="address-info-label">
                                <label for="address-line-2"> Address Line 2 </label>
                                <input type="text" id="address-line-2" defaultValue={addressLineTwo} onChange={(e) => {setAddressLineTwo(e.target.value)}}/>
                            </div>
                        </div>
                        <div className="address-info-label">
                                <label for="country"> Country </label>
                                <input type="text" required id="country" defaultValue={country} onChange={(e) => {setCountry(e.target.value)}}/>
                        </div>
                        <div className="city-state">
                            <div className="address-info-label">
                                <label for="city"> City </label>
                                <input type="text" required id="city" defaultValue={city} onChange={(e) => {setCity(e.target.value)}}/>
                            </div>
                            <div className="address-info-label">
                                <label for="state"> State </label>
                                <input type="text" required id="state" defaultValue={state} onChange={(e) => {setState(e.target.value)}}/>
                            </div>
                        </div>
                        <div className="buttons">
                            <button onClick={() => {setCurrentInfo(prevNum => prevNum-1)}} className="next-info"> Back </button>
                            <button onClick={() => {setCurrentInfo(prevNum => prevNum+1)}} className="next-info"> Next </button>
                        </div>
                    </div> : <div className="confirm-info">
                        <h2> <h2 className="edit-info" onClick={() => {setCurrentInfo(0)}}> + </h2>Credit Card Number: {creditCardNum}</h2>
                        <h2> <h2 className="edit-info" onClick={() => {setCurrentInfo(0)}}> + </h2>Credit Card Expiration Date: {creditCardExp}</h2>
                        <h2> <h2 className="edit-info" onClick={() => {setCurrentInfo(0)}}> + </h2>Credit Card Security Code: {creditCardSec}</h2>
                        <h2> <h2 className="edit-info" onClick={() => {setCurrentInfo(1)}}> + </h2>Address Line 1: {addressLineOne}</h2>
                        <h2> <h2 className="edit-info" onClick={() => {setCurrentInfo(1)}}> + </h2>Address Line 2: {addressLineOne}</h2>
                        <h2> <h2 className="edit-info" onClick={() => {setCurrentInfo(1)}}> + </h2>Country: {country}</h2>
                        <h2> <h2 className="edit-info" onClick={() => {setCurrentInfo(1)}}> + </h2>City: {city}</h2>
                        <h2> <h2 className="edit-info" onClick={() => {setCurrentInfo(1)}}> + </h2>State: {state}</h2>
                        <div className="buttons">
                            <button onClick={() => {setCurrentInfo(prevNum => prevNum-1)}} className="next-info"> Back </button>
                            <button className="next-info" style={{width: 180 + "px"}}> Purchase Item </button>
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
