import React from "react";
import './styles.css';

const Main = (props) => {
    return(
        <div className='Main'>
            { props.children }
        </div>
    )
}

export default Main;