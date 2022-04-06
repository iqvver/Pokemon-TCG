import React, { Component } from 'react';
import * as axios from "axios"
import { connect } from "react-redux";
import { setTypeAC, setSubTypeAC, searchPokemonAC } from '../../../redux/pokemonFilter-reducer';
import Filter from './Filter';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../Hoc/withAuthRedirect';
import { Grid } from '@mui/material';

class FilterContainer extends Component {
    render() {
        if (this.props.typePokemon.length === 0) {
            axios.get("https://api.pokemontcg.io/v2/types").then(type => {
                this.props.setTypePoke(type.data.data)
            });
        }
        if (this.props.subtypePokemon.length === 0) {
            axios.get("https://api.pokemontcg.io/v2/subtypes").then(subtype => {
                this.props.setSubtype(subtype.data.data)
            });
        }
        return (
            <Grid container className='filterContainer'>
                <Filter
                    typePokemon={this.props.typePokemon}
                    subtypePokemon={this.props.subtypePokemon}
                    newSearchPokemon={this.props.newSearchPokemon}
                    searchPokemon={this.props.searchPokemon}
                    searchPokemonName={this.props.searchPokemonName}
                    searchpokemonType={this.props.searchpokemonType}
                    searchPokemonSubtype={this.props.searchPokemonSubtype}
                />
            </Grid>
        )
    }
}

let mapStateToProps = (state) => ({
    typePokemon: state.filterPage.typePokemon,
    subtypePokemon: state.filterPage.subtypePokemon,
    searchPokemon: state.filterPage.searchPokemon,

});
let mapDispatchToProps = (dispatch) => {
    return {
        setTypePoke: (typePokemon) => {
            dispatch(setTypeAC(typePokemon));
        },
        setSubtype: (subtypePokemon) => {
            dispatch(setSubTypeAC(subtypePokemon));
        },
        newSearchPokemon: (searchPokemonName, searchPokemonType, searchPokemonSubtype) => {
            dispatch(searchPokemonAC(searchPokemonName, searchPokemonType, searchPokemonSubtype))
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(FilterContainer);
