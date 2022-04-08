import React, { Component } from 'react';
import { connect } from "react-redux";
import { getTypePokemon, getSubtypePokemon, newSearchPokemon } from '../../../redux/pokemonFilter-reducer';
import Filter from './Filter';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../Hoc/withAuthRedirect';
import { Grid } from '@mui/material';

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

    render() {
        return (
            // контейнер со отфильтрованной страницей карточек покемонов и пагинотор
            // передача нужных переменных
            <Grid container className='filterContainer' >
                <Filter
                    typePokemon={this.props.typePokemon}
                    subtypePokemon={this.props.subtypePokemon}
                    newSearchPokemon={this.props.newSearchPokemon}
                    searchPokemon={this.props.searchPokemon}
                />
            </Grid>
        )
    }
}

// получение данных из state
let mapStateToProps = (state) => ({
    typePokemon: state.filterPage.typePokemon,
    subtypePokemon: state.filterPage.subtypePokemon,
    searchPokemon: state.filterPage.searchPokemon,
});

export default compose(connect(mapStateToProps, { getTypePokemon, getSubtypePokemon, newSearchPokemon }), withAuthRedirect)(FilterContainer);