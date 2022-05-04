import React from 'react'
import './Pokemon.css';
import { NavLink } from 'react-router-dom';
import pokeNo from '../../../../assets/images/pokeNo.jpg'

// одна крточка покемона
let Pokemon = ({ pokemon }) => {
    return (
        <div className="pokemonCard" container xs={4}>
            <NavLink to={'/cards/' + pokemon.id}>
                <img src={pokemon.images.small} alt={pokeNo} /> </NavLink>
            <div className='cardContent'>
                <span>Имя: {pokemon.name}</span> <br />
                <span>Тип: {pokemon.types}</span> <br />
                <span>Под тип: {pokemon.subtypes}</span>
            </div>
        </div>
    )
}

export default Pokemon;