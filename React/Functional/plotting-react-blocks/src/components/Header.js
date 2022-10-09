import React from "react";
import './styles.css'

const Header = (props) => {
    return(
        <div className="Header">
            { props.children }
        </div>
    )
}

export default Header;