import React from 'react';
import { connect } from "react-redux";
import { setPokemonsAC, setCurrentPageAC, setPokemonsTotalCountAC } from '../../../redux/pokecard-reducer';
import PokeCards from './PokeCards';

let mapStateToProps = (state) => {
    return {
        pokemons: state.pokemonCardPage.pokemons,
        pageSize: state.pokemonCardPage.pageSize,
        totalCount: state.pokemonCardPage.totalCount,
        currentPage: state.pokemonCardPage.currentPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setPokemons: (pokemons) => {
            dispatch(setPokemonsAC(pokemons));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setPokemonsTotalCount: (totalCount) => {
            dispatch(setPokemonsTotalCountAC(totalCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokeCards);
