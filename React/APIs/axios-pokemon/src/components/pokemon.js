import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pokemon = (props) => {
    
    const [responseData, setResponseData] = useState([]);
    useEffect(() => {
        console.log('inside useEffect');
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => {
                setResponseData(response.data.results) // 
                console.log(response.data.results)
            })
            

        // .then((response) => console.log(response))
        // .catch((err) => console.log(err))



        
    }, []);

    return (
        <div>
            <h1> Axios Pokemon api</h1>
            <ul>
            {
                responseData.map((x, index)=> 
                        
                        <li key={index}> {x.name}</li>
                    
                )
            }
            </ul>
        </div>
    );
}
export default Pokemon;