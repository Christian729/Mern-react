import React from "react";
import axios from 'axios';

const Deletebutton = (props) => {
    const { personId, successCallback } = props;
    const deleteAuthor = e => {
        axios.delete('http://localhost:8000/api/authors/' + personId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button onClick={deleteAuthor}>Delete</button>
    )
}
export default Deletebutton;