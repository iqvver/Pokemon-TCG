import React, { Component } from 'react';
import { connect } from "react-redux";
import { getTypePokemon, getSubtypePokemon, newSearchPokemon, getFilterPokemons } from '../../../redux/pokemonFilter-reducer';
import Filter from './Filter';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../Hoc/withAuthRedirect';
import { Grid } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';

// контейнет со всеми типами и подтипами покемонов
// контейнер с фильтрацией и пагинацией покемонов по типам и подтипам 
class FilterContainer extends Component {
    // перерисовка омпоненты
    refreshFilterPage() {
        this.props.getFilterPokemons(this.props.currentFilterPage,
            this.props.pageFilterSize, this.props.searchPokemon);
    }
    // получение данных из редьюсера
    componentDidMount() {
        this.refreshFilterPage();
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
        this.props.getFilterPokemons(pageNumber, this.props.pageFilterSize);
    }
    // перерисовка по определенному условию
    componentDidUpdate(prevProps, prevState) {
        if (
            (prevProps.searchPokemon.pokemonName !== this.props.searchPokemon.pokemonName && this.props.searchPokemon.pokemonName !== undefined) ||
            (prevProps.searchPokemon.pokemonType !== this.props.searchPokemon.pokemonType && this.props.searchPokemon.pokemonType !== undefined) ||
            (prevProps.searchPokemon.pokemonSubtype !== this.props.searchPokemon.pokemonSubtype && this.props.searchPokemon.pokemonSubtype !== undefined)
        ) {
            this.refreshFilterPage();
        }
    }

    render() {
        return (
            <>
                {this.props.isFilterFetching ? <LinearProgress /> : null}
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
                        onPageChanged={this.onPageChanged}
                        filteredPokemon={this.props.filteredPokemon}
                        pageFilterSize={this.props.pageFilterSize}
                        currentPage={this.props.currentPage}
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
    filteredPokemon: state.filterPage.filteredPokemon,
    totalCount: state.filterPage.totalCount,
    isFilterFetching: state.filterPage.isFilterFetching,
    pageFilterSize: state.filterPage.pageFilterSize,
    currentPage: state.filterPage.currentPage
});

export default compose(connect(mapStateToProps, {
    getTypePokemon, getSubtypePokemon, newSearchPokemon, getFilterPokemons
}), withAuthRedirect)(FilterContainer);