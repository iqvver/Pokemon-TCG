import * as React from 'react';
import './ProfilePokemon.css';
import { Divider } from '@material-ui/core';
import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';

// страница с информацией о выбранном покемоне
const ProfilePokemon = ({ pokemonsProfile, ...props }) => {
    if (!pokemonsProfile) {
        return <LinearProgress />
    }
    return (
        <div className='pokemonCardContainer'>
            {
                // кнопка назад (back)
            }
            <div className='buttonBlock'>
                <Button variant="text" onClick={() => props.history.goBack()}>Back</Button>
            </div>
            {
                // информация о покемоне по категориям
            }
            <div className='infoBlock'>
                <div><h2>{pokemonsProfile.data.name}</h2></div>
                <div className='general'>
                    <h4>General informations</h4>
                    <Divider />
                    <div>Set identifier  {pokemonsProfile.data.number}</div>
                    <div>{pokemonsProfile.data.rarity}
                        {pokemonsProfile.data.supertype}</div>
                    <div>Illustrated by  {pokemonsProfile.data.artist}</div>
                </div>
                <div className='informations'>
                    <h4>Vullaby's informations</h4>
                    <Divider />
                    <div>National Pokédex No  {pokemonsProfile.data.nationalPokedexNumbers}</div>
                    <div>{pokemonsProfile.data.hp}  HP</div>
                    <div>{pokemonsProfile.data.types}  type Card</div>
                    <div>{pokemonsProfile.data.subtypes}  {pokemonsProfile.data.supertype}</div>
                </div>
                <div className='attacks'>
                    <h4>Vullaby's Attacks</h4>
                    <Divider />
                    <div>{pokemonsProfile.data.attacks[0].name}</div>
                    <div>{pokemonsProfile.data.attacks[0].text}</div>
                    <div>{pokemonsProfile.data.attacks.name}
                        {pokemonsProfile.data.attacks.damage}</div>
                </div>
                <div className='foot'>
                    <h4>Other Informations</h4>
                    <Divider />
                    {pokemonsProfile.data.retreatCost}
                </div>
            </div>
            {
                // картинка
            }
            <div className='imgBlock'>
                <img src={pokemonsProfile.data.images.large} />
            </div>
        </div>
    )
}
export default ProfilePokemon;