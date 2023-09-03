


export const InfoIcon = (props) => {


    return <div className="info-icon">
        <div className="img-container">
            <img src={props.SRC} alt="info icon"/>
        </div>
        <h2> {props.iconName} </h2>
        <p> {props.iconInfo} </p>
    </div>

}
