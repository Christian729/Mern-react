import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pokemon = (props) => {
    
    const [responseData, setResponseData] = useState([]);
    useEffect(() => {
        console.log('inside useEffect');
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => {
                setResponseData(response.data.results) // 
                console.log(response.data.results)// here you can console log information about the response variable.
            })
            

        // .then((response) => console.log(response))
        // .catch((err) => console.log(err))



        
    }, []);

    return (
        <div>
            <h1> Axios Pokemon api</h1>
            <ul>
            {
                responseData.map((x, index)=> // here we are iterating through a list of x(in this case x= pokemon), it is grabbing the list through
                    // the responseData  variable.
                        
                        <li key={index}> {x.name}</li>// here we display the listed variable and listed its name. 
                    // you can find a list of variables to call upon by checking the inspect-> console-> then see the information in the console log
                )
            }
            </ul>
        </div>
    );
}
export default Pokemon;