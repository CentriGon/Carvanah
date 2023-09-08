import "../Styles/CarView.css"
import { useNavigate } from "react-router-dom"


export const CarView = () => {

    const navigate = useNavigate();


    return <div className="car-view">
        <div className="nav-bar view-nav">
            <div className="left-side-nav">
                <h1> Carvanah </h1>
            </div>
            <div className="right-side-nav">
                <button className="nav-bar-button" onClick={() => {navigate("/")}}> Back </button>
            </div>
        </div>  
        <div className="triangle-left-side"></div>
        <div className="green-ball-view ball1"></div>
        <div className="green-ball-view ball2"></div>
        <div className="green-ball-view ball3"></div>

    </div>
}
