import React, { useState } from 'react';
const PersonCard = (props) => {
    const [ birthDayAge, setBirthDayAge] = useState(props.initialAge);
    return(
        <div>
            <h1 style={{color:"black"}}>  { props.last_name }, { props.first_name }</h1>
            <p>Age: {birthDayAge}</p>
            <p>Hair Color: {props.hairColor }</p>
            <button onClick={ (event) => setBirthDayAge(birthDayAge + 1) }>Happy Birthday, {props.first_name}!</button>
        </div>
    );

}
export default PersonCard;