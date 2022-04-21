import React, { Component } from 'react';
import { connect } from "react-redux";
import { getTypePokemon, getSubtypePokemon, newSearchPokemon } from '../../../redux/pokemonFilter-reducer';
import { getPokemons } from '../../../redux/pokemonCard-reducer';
import Filter from './Filter';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../Hoc/withAuthRedirect';
import { Grid } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';

// контейнет со всеми типами и подтипами покемонов
// контейнер с фильтрацией и пагинацией покемонов по типам и подтипам 
class FilterContainer extends Component {
    // получение данных из редьюсера
    componentDidMount() {
        // получение типов карточек из редьюсера
        this.props.getTypePokemon(this.props.typePokemon);
        // получение подтипов карточек из редьюсера
        this.props.getSubtypePokemon(this.props.subtypePokemon);
        // получение поиска из редьюсера
        this.props.newSearchPokemon(this.props.searchPokemonName,
            this.props.searchPokemonType, this.props.searchPokemonSubtype);
    }

    // получение одной страници с карточками покемонов
    onPageChanged = (pageNumber) => {
        this.props.getPokemons(pageNumber, this.props.pageSize);

    }

    render() {
        return (<>
            {this.props.isFetching ? <LinearProgress /> : null}
            {
                // контейнер со отфильтрованной страницей карточек покемонов и пагинотор
                // передача нужных переменных
            }
            <Grid container className='filterContainer' >
                <Filter
                    typePokemon={this.props.typePokemon}
                    subtypePokemon={this.props.subtypePokemon}
                    newSearchPokemon={this.props.newSearchPokemon}
                    searchPokemon={this.props.searchPokemon}
                    pokemons={this.props.pokemons}
                    totalCount={this.props.totalCount}
                    pagesCount={this.props.pagesCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                />
            </Grid>
        </>
        )
    }
}

// получение данных из state
let mapStateToProps = (state) => ({
    typePokemon: state.filterPage.typePokemon,
    subtypePokemon: state.filterPage.subtypePokemon,
    searchPokemon: state.filterPage.searchPokemon,
    pokemons: state.pokemonCardPage.pokemons,

    pageSize: state.pokemonCardPage.pageSize,
    totalCount: state.pokemonCardPage.totalCount,
    currentPage: state.pokemonCardPage.currentPage,
    isFetching: state.pokemonCardPage.isFetching,
});

export default compose(connect(mapStateToProps, { getTypePokemon, getSubtypePokemon, newSearchPokemon, getPokemons }), withAuthRedirect)(FilterContainer);