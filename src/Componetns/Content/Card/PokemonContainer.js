import { Grid } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import React from 'react';
import { connect } from "react-redux";
import { compose } from 'redux';
import PaginatorUi from '../../../Common/Paginator/PaginatorUi';
import { withAuthRedirect } from '../../../Hoc/withAuthRedirect';
import { getPokemons } from '../../../redux/pokemonCard-reducer';
import Pokemon from './CardPokemon/Pokemon';
import './PokemonContainer.css';

class PokemonContainer extends React.Component {
    componentDidMount() {
        this.props.getPokemons(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber) => {
        this.props.getPokemons(pageNumber, this.props.pageSize);
    }
    componentDidUpdate(prevProps, prevState) {
        let a = this.state;
        let b = this.props;
        console.log('componentDidUpdate')
    }
    render() {
        return (<>
            {this.props.isFetching ? <LinearProgress /> : null}
            <Grid container className='paginationContainer'>
                <PaginatorUi
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    totalCount={this.props.totalCount}
                    pagesCount={this.props.pagesCount}
                    pageSize={this.props.pageSize} />
            </Grid>
            <Grid container className='pokemonContainer'>
                {this.props.pokemons.map(pokemonCard =>
                    <Pokemon pokemon={pokemonCard} />)
                }
            </Grid>
        </>
        )
    }
}

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

export default compose(connect(
    mapStateToProps, { getPokemons }), withAuthRedirect)(PokemonContainer);
