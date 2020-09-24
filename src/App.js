import React from 'react';
import './App.css';
import BestPokemon from './BestPokemon';
import CaughtPokemon from './CaughtPokemon';
import Logo from './Logo';

function App() {
   const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
   const date = new Date().toLocaleDateString();
  return (
    <div className="App">
      <Logo  appName='Pokedex'/>
      <BestPokemon abilities={abilities}/>
      <CaughtPokemon d={date} />
      
    </div>
  );
}

export default App;
