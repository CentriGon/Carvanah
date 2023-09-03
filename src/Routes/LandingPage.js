import "../Styles/LandingPage.css"
import { InfoIcon } from "../Components/InfoIcon"

export const LandingPage = () => {



    return <div className="landing-page">
        <div className="nav-bar">
            <div classname="left-side-nav">
                <h1> Carvanah </h1>
            </div>
            <div className="right-side-nav">
                <button className="nav-bar-button"> Inventory </button>
                <button className="nav-bar-button"> Pricing </button>
                <button className="nav-bar-button"> About us </button>
            </div>
        </div>
        <div className="triangle-right-side"></div>
        <div className="main-hero-section">
            <div className="hero-left">
                <h1 className="hero-section-text">Premium Car Rentals on Demand</h1>
                <button> Start Renting</button>
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
    </div>
}
