import * as React from 'react';

const PokeCard = (props) => {

    if (!props.pokemonsProfile) {
        return <di> gg! </di>
    }

    return (<div className='pokeCard-Block'>
        <div className='imgCard'>
            <img src={props.pokemonsProfile.data.images.small} />
        </div>
        <div className='infoBlock'>
            <div>Имя:{props.pokemonsProfile.data.name}</div>
            <div>Тип:{props.pokemonsProfile.data.types}</div>
            <div>Хозяин:{props.pokemonsProfile.data.artist}</div>
        </div>
    </div>
    )
}
export default PokeCard;