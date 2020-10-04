import React, { useEffect, useState } from "react";

function PokemonMoves(props) {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`)
        .then((response) => {
           return response.json();
        })
        .then((data) => {
            console.log(data);
            setPokemonData(data);
        })
    }, [props.pokemonId]);

   return <>
   {pokemonData ? (
        <div>
        <p>{pokemonData.name}'s moves:</p>
        <ul>
          {pokemonData.moves.map((move, index) => {
            return <li key={index}>{move.move.name}</li>;
          })}
        </ul>
      </div>

    ) : (
       null 
    )}
   </>
//   if (pokemonData) {
//     return (
//       <div>
//         <p>{pokemonData.name}'s moves:</p>
//         <ul>
//           {pokemonData.moves.map((move, index) => {
//             return <li key={index}>{move.move.name}</li>;
//           })}
//         </ul>
//       </div>
//     );
//   } else {
//     return null;
//   }
}

export default PokemonMoves;