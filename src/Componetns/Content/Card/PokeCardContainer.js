import React from 'react';
import { connect } from "react-redux";
import { setPokemonsAC, setCurrentPageAC, setPokemonsTotalCountAC, setIsFetchingAC } from '../../../redux/pokecard-reducer';
import PokeCards from './PokeCards';
import '../Content.css';
import LinearProgress from '@mui/material/LinearProgress';
import { pokemonsAPI } from '../../../Api/Api';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../Hoc/withAuthRedirect';

let mapStateToProps = (state) => {
    return {
        pokemons: state.pokemonCardPage.pokemons,
        pageSize: state.pokemonCardPage.pageSize,
        totalCount: state.pokemonCardPage.totalCount,
        currentPage: state.pokemonCardPage.currentPage,
        isFetching: state.pokemonCardPage.isFetching,
        isAuth: state.isAuth.isAuth
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
        },
        setIsFetching: (isFetching) => {
            dispatch(setIsFetchingAC(isFetching))
        },
    }
}

const pokeCardContainer = (props) => {
    if (props.pokemons.length === 0) {
        props.setIsFetching(true);
        pokemonsAPI.getPokemon().then(data => {
            props.setIsFetching(false);
            props.setPokemons(data.data);
            props.setPokemonsTotalCount(data.totalCount);
        });
    }
    let onPageChanged = (pageNumber) => {
        props.setCurrentPage(pageNumber);
        props.setIsFetching(true);
        pokemonsAPI.getPokemon().then(data => {
            props.setIsFetching(false);
            props.setPokemons(data.data)
        });
    }

    return (<>
        {props.isFetching ? <LinearProgress /> : null}
        <PokeCards
            totalCount={props.totalCount}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            onPageChanged={onPageChanged}
            pokemons={props.pokemons}
            setPokemons={props.setPokemons}
            setPokemonsTotalCount={props.setPokemonsTotalCount}
            setCurrentPage={props.setCurrentPage}
            isFetching={props.isFetching} />
    </>
    )
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(pokeCardContainer);
