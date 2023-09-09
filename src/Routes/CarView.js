import "../Styles/CarView.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import $ from 'jquery';


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
    const [currentCarInfo, setCurrentCarInfo] = useState(["a", "gas", "17", "lamborghini", "aventador coupe", "2012", "12"]);




    const changeCarousel = (shouldForward) => {
        let newNum = -999;
        if (shouldForward) {
            if (carouselNum + 1 >= carsList.length) {
                newNum = 0;
            }
            else {
                newNum = carouselNum + 1;
            }
        }
        else {
            if (carouselNum - 1 < 0) {
                newNum = carsList.length - 1;
            }
            else {
                newNum = carouselNum - 1;
            }
        }

        const carModel = (carsNames[newNum].split(" "))[1]
        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/cars?model=' + carModel,
            headers: { 'X-Api-Key': 'xQgxYV+/+ypCz5a9eqn8zw==fiTHAw48PfDVfPdr'},
            contentType: 'application/json',
            success: function(result) {
                setCurrentCarInfo([
                    capitalizeFirstLetter(result[0].transmission),
                    capitalizeFirstLetter(result[0].fuel_type),
                    capitalizeFirstLetter(result[0].highway_mpg),
                    capitalizeFirstLetter(result[0].make),
                    capitalizeFirstLetter(result[0].model),
                    capitalizeFirstLetter(result[0].year),
                    capitalizeFirstLetter(result[0].cylinders)
                ])
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
        });
        setCarouselNum(newNum)
    }

    function capitalizeFirstLetter(input) {
        // Check if the input is a string
        if (typeof input === 'string' && input.length > 0) {
          // Split the input into words using whitespace as the delimiter
          const words = input.split(/\s+/);
      
          // Capitalize each word that starts with a letter
          const capitalizedWords = words.map((word) => {
            // Check if the first character is a letter
            if (/^[a-zA-Z]/.test(word)) {
              // Capitalize the first letter and concatenate the rest of the string
              return word.charAt(0).toUpperCase() + word.slice(1);
            }
            // If the word doesn't start with a letter, return it as is
            return word;
          });
      
          // Join the capitalized words back into a single string
          return capitalizedWords.join(' ');
        }
      
        // If the input is not a string or is empty, return it as is
        return input;
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
            <div className="car-carousel view-carousel">
                <button className="carousel-button view-arrow" onClick={() => {changeCarousel(false)}}> <img className="arrow left-arrow" src={require("../images/white-arrow.png")}/></button>
                <div className="car-container">
                    <img src={carsList[carouselNum]} alt="display car" className="carousel-car move-left car-view-car" />
                </div>
                <button className="carousel-button view-arrow" onClick={() => {changeCarousel(true)}}> <img className="arrow right-arrow" src={require("../images/white-arrow.png")}/></button>
            </div>
            <div className="info-box">
                <table>
                    <tr>
                        <th className="table-right-border"> Property </th>
                        <th> Value </th>
                    </tr>
                    <tr>
                        <td className="table-right-border"> Transmission </td>
                        <td> {currentCarInfo[0]} </td>
                    </tr>
                    <tr>
                        <td className="table-right-border"> Fuel Type </td>
                        <td> {currentCarInfo[1]}</td>
                    </tr>
                    <tr>
                        <td className="table-right-border"> Highway MPG </td>
                        <td> {currentCarInfo[2]} </td>
                    </tr>
                    <tr>
                        <td className="table-right-border"> Make </td>
                        <td> {currentCarInfo[3]} </td>
                    </tr>
                    <tr>
                        <td className="table-right-border"> Model </td>
                        <td> {currentCarInfo[4]} </td>
                    </tr>
                    <tr>
                        <td className="table-right-border"> Year </td>
                        <td> {currentCarInfo[5]} </td>
                    </tr>
                    <tr>
                        <td className="table-right-border bottom-row"> Cylinders </td>
                        <td className="bottom-row"> {currentCarInfo[6]} </td>
                    </tr>
                </table>
                <button style={{backgroundColor: "var(--green)"}}> Rent {carsNames[carouselNum]}</button>
            </div>
        </di>
        <div className="triangle-left-side"></div>
        <div className="green-ball-view ball1"></div>
        <div className="green-ball-view ball2"></div>
        <div className="green-ball-view ball3"></div>

    </div>
}
