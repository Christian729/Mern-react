import React, { useEffect, useState } from 'react';

const Pokemon = (props) => {
    const [state, setState] =useState([]);

    useEffect(() => {
        console.log("Hello")
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response => {
            return response.json()
        })
        .then(response => {
            setState({
                pokemon: response.results
            })
        })
    }, []);

    return (
        <div>
            {state.pokemon ? state.pokemon.map((pokemonX, index)=>{
                return(<div key={index} >
                    <ul>
                        <li>{pokemonX.name}</li>
                    </ul>
                    </div>)
            }):null}
        </div>
    );
}
export default Pokemon;