import React, {useState} from 'react';


const CaughtPokemon = (props) => {
    //let date = new Date().toLocaleDateString();
    const [caught, setCaught] = useState([]);
    const [pokemonNameInput, setPokemonNameInput] = useState("");

    function catchPokemon(){
    
       
        if(!pokemonNameInput){
            return null;
        }else{
            setCaught(caught.concat(pokemonNameInput));
            setPokemonNameInput("");
        }
    }
    function handleInputChange(event){
        setPokemonNameInput(event.target.value);
    }
    

    return (
        <>
    <p>Caught {caught.length } Pokemon on {props.d}</p>
    <ul>
        {caught.map((item, index) => {
            return <li key={index}>{item}</li>
        })}
    </ul>
    <input
        type="text"
        value={pokemonNameInput}
        onChange={handleInputChange}

     />
    <button onClick={catchPokemon}>Caught Pokemon</button>
    </>
    )
}

export default CaughtPokemon;