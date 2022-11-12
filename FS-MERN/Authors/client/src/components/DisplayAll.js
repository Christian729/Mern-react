import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
// import Deletebutton from './Deletebutton'

const AuthorList = (props) => {
    const [ authorList, setAuthorList] = useState([]);

    const deleteAuthor = (authorId) => {
        axios.delete(`http://localhost:8000/api/authors/${authorId}`)
            .then(res => {
                console.log('success deleting author')
                console.log(res);
                const filteredAuthors = authorList.filter((author) => {
                    return author._id !== authorId;
                    
                })
                setAuthorList(filteredAuthors);
            })
            .catch(err => console.log(err))
    }

    useEffect(()=> {
        axios.get('http://localhost:8000/api/authors')
        .then((res)=> {
            console.log(res.data);
            setAuthorList(res.data);
        })
        .catch((err)=> console.log(err))
    }, []);
    
    return (
        <div>
            <Link to="/new">Add an Author</Link>
            <p>we have quotes by:</p>
            <table className="table">
            
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Actions Available</th>
                </tr>
            </thead>
            <tbody>
            {authorList.map((author,i)=>
            
                <tr key={author._id}>
                    <td>{author.fullName}</td>
                    <td>
                        
                        <Link to={`/edit/${author._id}`}><button>Edit</button></Link>
                        
                        <button onClick={() => deleteAuthor(author._id)}>Delete</button>
                    </td>
                </tr>
            
                
            )}
            </tbody>
        </table>
        </div>
        
    )
    
}

export default AuthorList;