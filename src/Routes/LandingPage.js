import "../Styles/LandingPage.css"
import { InfoIcon } from "../Components/InfoIcon"
import { useEffect, useState } from "react"
import $ from 'jquery';
import { useNavigate} from "react-router-dom"

export const LandingPage = () => {

    let navigate = useNavigate();

    const [carsList, setCarsList] = useState([
        require("../images/aventador-coupe.png"),
        require("../images/bugatti-veyron.png"),
        require("../images/teslaModelY.png")
    ])
    const [carsNames, setCarsNames] = useState([
        "Lamborghini Aventador",
        "Bugatti Veyron",
        "Tesla Model Y"
    ])
    const [carouselNum, setCarouselNum] = useState(0);

    const getOutsideCar = (isBefore) => {
        if (isBefore) {
            if (carouselNum - 1 < 0) {
                return carsList[carsList.length - 1];
            }
            else {
                return carsList[carouselNum - 1];
            }
        }
        else {
            if (carouselNum + 1 >= carsList.length) {
                return carsList[0]
            }
            else {
                return carsList[carouselNum + 1];
            }
        }
    }

    const changeCarousel = (shouldForward) => {
        if (shouldForward) {
            if (carouselNum + 1 >= carsList.length) {
                setCarouselNum(0)
            }
            else {
                setCarouselNum(prevNum => prevNum + 1);
            }
        }
        else {
            if (carouselNum - 1 < 0) {
                setCarouselNum(carsList.length - 1);
            }
            else {
                setCarouselNum(prevNum => prevNum - 1);
            }
        }
    }

    const manipulateMenu = (should) => {
        if (!should) {
            document.querySelector(".menu-popup").style.cssText = "width: 0%;";
        }
        else {
            document.querySelector(".menu-popup").style.cssText = "width: 100%;";
        }
    }

    useEffect(() => {
        // let model = "camry"
        // $.ajax({
        //     method: 'GET',
        //     url: 'https://api.api-ninjas.com/v1/cars?model=' + model,
        //     headers: { 'X-Api-Key': 'xQgxYV+/+ypCz5a9eqn8zw==fiTHAw48PfDVfPdr'},
        //     contentType: 'application/json',
        //     success: function(result) {
        //         console.log(result);
        //     },
        //     error: function ajaxError(jqXHR) {
        //         console.error('Error: ', jqXHR.responseText);
        //     }
        // });
    }, [])

    return <div className="landing-page">
        <div className="menu-popup">
            <button className="menu-popup-button" onClick={() => {manipulateMenu(false)}}> Back </button>
            <button className="menu-popup-button" onClick={() => {navigate("/car-view")}}> Inventory </button>
            <button className="menu-popup-button"> Pricing </button>
            <button className="menu-popup-button"> About us </button>
        </div>
        <div className="nav-bar">
            <div className="left-side-nav">
                <h1> Carvanah </h1>
            </div>
            <div className="right-side-nav">
                <button className="nav-bar-button" onClick={() => {navigate("/car-view")}}> Inventory </button>
                <button className="nav-bar-button"> Pricing </button>
                <button className="nav-bar-button"> About us </button>
                <img src={require("../images/threebars.png")} onClick={() => {manipulateMenu(true)}} className="three-bars-menu" alt="menu option"/>
            </div>
        </div>
        <div className="triangle-right-side"></div>
        <div className="main-hero-section">
            <div className="hero-left">
                <h1 className="hero-section-text">Premium Car Rentals on Demand</h1>
                <button onClick={() => {navigate("/car-view")}}> Start Renting</button>
            </div>
            <img src={require("../images/580b585b2edbce24c47b2c83.png")} alt="red lamborghini aventador"/>
        </div>
        <div className="info-icons">
            <InfoIcon SRC={require("../images/money-icon.png")} iconName={"Versatile Pricing"} iconInfo={"Explore our car website's versatile pricing options, catering to every budget. Find the perfect deal for your dream car today."}/>
            <InfoIcon SRC={require("../images/car-icon.png")} iconName={"Large Inventory"} iconInfo={"Discover our extensive inventory, offering a wide range of cars to suit your preferences."} />
            <InfoIcon SRC={require("../images/insurance-icon.png")} iconName="Quality Insurance" iconInfo={"Rest assured with our quality insurance coverage, safeguarding your car and your peace of mind."} />
        </div>
        <div className="red-banner">
            <h1 style={{fontSize: 50 + "px", color: "white"}}> Worried About Pricing? </h1>
            <button style={{backgroundColor: "white", color: "red"}}> Get a Quote Today</button>
        </div>
        <h1 style={{alignSelf: "center", color: "black", marginTop: 40 + "px"}}> Preview Inventory </h1>
        <div className="car-carousel">
            <button className="carousel-button" onClick={() => {changeCarousel(false)}}> <img className="arrow left-arrow" src={require("../images/white-arrow.png")}/></button>
            <div className="car-container">
                <img src={carsList[carouselNum]} alt="display car" className="carousel-car move-left" />
            </div>
            <button className="carousel-button" onClick={() => {changeCarousel(true)}}> <img className="arrow right-arrow" src={require("../images/white-arrow.png")}/></button>
        </div>
        <h1 style={{alignSelf: "center", color: "black", marginTop: 20 + "px", textAlign: "center"}}> {carsNames[carouselNum]} </h1>
        <div className="start-section">
            <div className="red-ball color-ball"></div>
            <div className="red-to-green-ball color-ball"></div>
            <div className="green-ball color-ball"></div>
            <div className="ready-prompt">
                <h1> Ready? </h1>
                <button onClick={() => {navigate("/car-view")}}> Start Renting </button>
            </div>
        </div>
        <div className="website-terms">
            
        </div>
    </div>
}
