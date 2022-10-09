import React from "react";
import './styles.css'


const Advertisement = (props) => {
    return(
        <div className="Advert">
            { props.children }
        </div>
    )
}

export default Advertisement;