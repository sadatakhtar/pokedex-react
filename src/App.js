import React from 'react';
import './App.css';
import BestPokemon from './BestPokemon';
import CaughtPokemon from './CaughtPokemon';
import Logo from './Logo';
import PokemonCity from './PokemonCity';
import PokemonMoves from './PokemonMoves';
import PokemonMovesSelector from './PokemonMovesSelector';

function App() {
   const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
   const date = new Date().toLocaleDateString();

   function logWhenClicked(){
    console.log('wow!!!!');
}
  return (
    <div className="App">
      <Logo  appName='Pokedex'logWhenClicked={logWhenClicked}/>
      <BestPokemon abilities={abilities}/>
      <CaughtPokemon d={date} />
      <PokemonMovesSelector />
      <PokemonCity />
      
    </div>
  );
}

export default App;
