import React from "react";
import './styles.css';


const SubContents = (props) => {
    return(
        <div className="SubContent" >
            { props.children }
        </div>
    )
}

export default SubContents;