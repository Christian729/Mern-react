import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import CreateAuthor from "./CreateAuth";

const Update = (props) => {
    const { id } = useParams();
    const [authorName, setAuthorName ] = useState("");
    const [errors, setErrors] = useState({});
    const [authorNotFoundError, setAuthorNotFoundError] = useState("");
    
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                console.log(res.data)
                setAuthorName(res.data);
                
            })
            .catch(err => {
                console.log(err.res)
                setAuthorNotFoundError(`Author not found with that ID`);
            });

    }, [])

    const updateAuthor = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${id}`, { fullName:authorName})
        .then(response => {
            console.log(response);
            navigate('/')
        })
        .catch((err) => {
            console.log(err.response.data.err.errors);
            setErrors(err.response.data.err.errors);
        });
    }


    return(
        <div>
            <h1>Edit Author</h1>
            
            <Link to={"/"}>Home</Link>
            <form  onSubmit={updateAuthor}>
                    {authorNotFoundError ? <h2>{authorNotFoundError}</h2> : null}
                <div>
                    <label>Name</label>
                    <input type='text' id='fullName' value={authorName.fullName} 
                    onChange={(e) => setAuthorName(e.target.value)}/>
                </div>
                {errors.fullName ? <p>{errors.fullName.message}</p> : null}
                <button type="submit">Submit</button>
            </form>
            
        </div>
    )
}

export default Update;