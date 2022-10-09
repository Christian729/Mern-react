import React from "react";
import './styles.css'



const Navigation = (props) => {
    return(
        <div className="Nav">
            { props.children}
        </div>
    )
}

export default Navigation;