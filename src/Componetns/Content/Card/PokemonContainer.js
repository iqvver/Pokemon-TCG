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

// контейнет со всеми карточками покемонов
class PokemonContainer extends React.Component {
    // получение из API всех карочек
    componentDidMount() {
        this.props.getPokemons(this.props.currentPage, this.props.pageSize);
    }
    // получение одной страници с карточками покемонов
    onPageChanged = (pageNumber) => {
        this.props.getPokemons(pageNumber, this.props.pageSize);
    }
    
    render() {
        // контейнер со страницей карточек покемонов и пагинотор
        // передача нужных переменных
        return (
            <>
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
