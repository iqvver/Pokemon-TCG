import React from 'react'
import * as axios from "axios"
import PokeCard from './PokeCard'

let PokeCards = (props) => {
    if (props.pokemons.length === 0) {
        axios.get("https://api.pokemontcg.io/v2/cards").then(card => {
            debugger;
            props.setPokemons(card.data.data)
        });
    }

    return <div>
        <PokeCard />
        {
            props.pokemons.map(p => <div key={p.id}>
                <span>
                    <div>
                        <img src={p.images.small} />
                    </div>
                </span>
                <span>
                    <div>Имя:{p.name}</div>
                    <div>Тип:{p.types}</div>
                    <div>Хозяин:{p.artist}</div>
                </span>
            </div>)
        }
    </div>
}

export default PokeCards;