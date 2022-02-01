import React from 'react';
import { connect } from "react-redux";
import { setPokemonsAC, setCurrentPageAC, setPokemonsTotalCountAC, setIsFetchingAC } from '../../../redux/pokecard-reducer';
import PokeCards from './PokeCards';
import *as axios from 'axios';
import { Redirect } from 'react-router'
import '../Content.css';
import LinearProgress from '@mui/material/LinearProgress';

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
    if ((localStorage.getItem('isAuth') == 'false') || (localStorage.getItem('isAuth') == '{"isAuth":""}')) {
        return <Redirect to={'/login'} />
    }
    if (props.pokemons.length === 0) {
        props.setIsFetching(true);
        axios.get(`https://api.pokemontcg.io/v2/cards?page=${props.currentPage}&count=${props.pageSize}`).then(card => {
            props.setIsFetching(false);
            props.setPokemons(card.data.data);
            props.setPokemonsTotalCount(card.data.totalCount);
        });
    }
    let onPageChanged = (pageNumber) => {
        props.setCurrentPage(pageNumber);
        props.setIsFetching(true);
        axios.get(`https://api.pokemontcg.io/v2/cards?page=${pageNumber}&count=${props.pageSize}`).then(card => {
            props.setIsFetching(false);
            props.setPokemons(card.data.data)
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

export default connect(mapStateToProps, mapDispatchToProps)(pokeCardContainer);
