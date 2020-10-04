import React from 'react';

const Logo = (props) => {

    function logWhenClicked(){
        console.log('wow!!!!');
    }
    return (
        <header>
            <h1>Welcome to the {props.appName}</h1>
             <img onClick={logWhenClicked} src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="logo" />
        </header>
    )

}

export default Logo;