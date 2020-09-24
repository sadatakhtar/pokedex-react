import React from 'react';

const BestPokemon = (props) => {
    //const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
    const message = 'My favorite Pokemon is Squirtle';
    return (
        <div>
            <p>{message}</p>
            <ul>
                {props.abilities.map((element) => {
                    return <li>{element}</li>
                })}
            </ul>

        </div>
    
    )

}

export default BestPokemon;