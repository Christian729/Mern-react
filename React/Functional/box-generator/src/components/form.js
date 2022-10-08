import React, { useState } from 'react';

const ColoredBox = (props) => {
    const { box, setBox } = props;

    const [ color, setColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setBox([...box, {
            color: color
        }
        ] );
        document.getElementById('boxForm').reset();
    };

    return (
        <form id='boxForm' onSubmit={ handleSubmit }>
            <h1>Set Box Color</h1>
            <label>Color</label>
            <input 
                type='text'
                name='color'
                onChange={ (e) => setColor(e.target.value)}
            />
            <button >Add</button>
        </form>
    )
}

export default ColoredBox;