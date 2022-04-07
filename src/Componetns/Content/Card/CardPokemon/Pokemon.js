import React from 'react'
import './Pokemon.css';
import { NavLink } from 'react-router-dom';

// одна крточка покемона
let Pokemon = ({ pokemon }) => {
    return (
        <div className="pokemonCard" container xs={4} xs={8}>
            <NavLink to={'/cards/' + pokemon.id}>
                <img src={pokemon.images.small} /> </NavLink>
            <div className='cardContent'>
                <span>Имя: {pokemon.name}</span> <br />
                <span>Тип: {pokemon.types}</span> <br />
                <span>Тренер: {pokemon.artist}</span>
            </div>
        </div>
    )
}

export default Pokemon;