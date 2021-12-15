import * as React from 'react';
import './PokeCard.css';

const PokeCard = (props) => {

    if (!props.pokemonsProfile) {
        return <di> gg! </di>
    }
    debugger;

    return (
        <div className='pokeCard-Block'>
            <div className='imgCard'>
                <img src={props.pokemonsProfile.data.images.small} />
            </div>
            <div className='infoBlock'>
                <div className='general'>
                    <div>{props.pokemonsProfile.data.name}</div>
                    <div>Set identifier  {props.pokemonsProfile.data.number}</div>
                    <div>{props.pokemonsProfile.data.rarity}  {props.pokemonsProfile.data.supertype}</div>
                    <div>Illustrated by  {props.pokemonsProfile.data.artist}</div>
                    <div className='informations'>
                        <div>National Pokédex No  {props.pokemonsProfile.data.nationalPokedexNumbers}</div>
                        <div>{props.pokemonsProfile.data.hp}  HP</div>
                        <div>{props.pokemonsProfile.data.types}  type Card</div>
                        <div>{props.pokemonsProfile.data.subtypes}  {props.pokemonsProfile.data.supertype}</div>
                    </div>
                    <div className='attacks'>
                        <div>{props.pokemonsProfile.data.attacks[0].name}</div>
                        <div>{props.pokemonsProfile.data.attacks[0].text}</div>
                        <div>{props.pokemonsProfile.data.attacks.name} -
                            {props.pokemonsProfile.data.attacks.damage}</div>
                    </div>
                    <div className='foot'> Weaknesses <br />
                        {props.pokemonsProfile.data.weaknesses[0].type}
                        {props.pokemonsProfile.data.weaknesses[0].value} <br/>
                        Retreat <br/>
                        {props.pokemonsProfile.data.retreatCost}

                    </div>
                </div>
            </div>
        </div>
    )
}
export default PokeCard;