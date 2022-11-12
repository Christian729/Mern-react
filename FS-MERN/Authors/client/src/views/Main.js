import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateAuthor from "../components/CreateAuth";
import AuthorList from "../components/DisplayAll";

const Main= () => {
    const [authorList, setAuthorList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                console.log(res.data)
                setAuthorList(res.data)
            })
            .catch((err)=> console.log(err))
    }, [])
    const removeFromDom = personId => {
        axios.delete("http://localhost:8000/api/authors/" + personId)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setAuthorList(authorList.filter(author=> author._id !== personId));
        })
        .catch((err)=> console.log(err))
    }
    const createAuthor = authorParam => {
        axios.post('http://localhost:8000/api/authors', authorParam)
            .then(res => {
                console.log(res);
                console.log(res.data)
                setAuthorList([...authorList, res.data])
            })
            .catch((err)=> console.log(err))
    }

    return (
        <div>
            <AuthorList authorList={authorList} setAuthorList={setAuthorList} removeFromDom={removeFromDom}/>
        </div>
    )

}
export default Main;