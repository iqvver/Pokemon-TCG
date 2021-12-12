import React from 'react';
import { connect } from "react-redux";
import { setPokemonsAC } from '../../../redux/pokecard-reducer';
import PokeCards from './PokeCards';

let mapStateToProps = (state) => {
    return {
        pokemons: state.pokemonCardPage.pokemons,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setPokemons: (pokemons) => {
            dispatch(setPokemonsAC(pokemons));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokeCards);
