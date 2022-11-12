import React, { useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';

const CreateAuthor= () => {
    const [fullName, setFullName] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState({}); // here we will set state so our validations display

    const onSubmitHandler =(e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors", {fullName})
        .then(response =>{
            console.log(response)
            navigate('/');
        })
        .catch(err =>{
            console.log(err); // this line will help us establish a validation
            console.log(err.response.data); // this line will help us establish a validation
            setErrors(err.response.data.err.errors)
        })

    };
    

    return(
        <div>
            <Link to="/">Home</Link>
            <form onSubmit={onSubmitHandler}>
            <div>
                <div>Add a new author:</div>
                <label>Name:</label>
                <input type="text" 
                name='fullName' 
                onChange= {(e)=>setFullName(e.target.value)}/>
            </div>
            {errors.fullName ? <p>{errors.fullName.message}</p> : null}
            <Link to={'/'}><button className='btn btn-danger'>Cancel</button></Link>
            <button className='btn btn-primary' type='submit'>Submit</button>
        </form>
        </div>
        
    )
}
export default CreateAuthor;