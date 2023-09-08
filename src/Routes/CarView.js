import "../Styles/CarView.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react";


export const CarView = () => {

    const navigate = useNavigate();
    const [carsList, setCarsList] = useState([
        require("../images/aventador-coupe.png"),
        require("../images/bugatti-veyron.png")
    ])
    const [carsNames, setCarsNames] = useState([
        "Lamborghini Aventador",
        "Bugatti Veyron"
    ])
    const [carouselNum, setCarouselNum] = useState(0);




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


    return <div className="car-view">
        <div className="nav-bar view-nav">
            <div className="left-side-nav">
                <h1> Carvanah </h1>
            </div>
            <div className="right-side-nav">
                <button className="nav-bar-button" onClick={() => {navigate("/")}}> Back </button>
            </div>
        </div>  
        <di className="car-info">
            <div className="car-carousel">
                <button className="carousel-button" onClick={() => {changeCarousel(false)}}> <img className="arrow left-arrow" src={require("../images/white-arrow.png")}/></button>
                <div className="car-container">
                    <img src={carsList[carouselNum]} alt="display car" className="carousel-car move-left car-view-car" />
                </div>
                <button className="carousel-button" onClick={() => {changeCarousel(true)}}> <img className="arrow right-arrow" src={require("../images/white-arrow.png")}/></button>
            </div>
            <div className="info-box">

            </div>
        </di>
        <div className="triangle-left-side"></div>
        <div className="green-ball-view ball1"></div>
        <div className="green-ball-view ball2"></div>
        <div className="green-ball-view ball3"></div>

    </div>
}
