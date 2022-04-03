import React, { Component } from 'react';
import * as axios from "axios"
import { connect } from "react-redux";
import { setTypeAC, setSubTypeAC, searchPokemonAC } from '../../redux/filter-reducer';
import Filter from './Filter';
import { compose } from 'redux';
import { withAuthRedirect } from '../../Hoc/withAuthRedirect';

class FilterContainer extends Component {
    render() {
        if (this.props.typepoke.length === 0) {
            axios.get("https://api.pokemontcg.io/v2/types").then(type => {
                this.props.setTypePoke(type.data.data)
            });
        }
        if (this.props.subtypepoke.length === 0) {
            axios.get("https://api.pokemontcg.io/v2/subtypes").then(subtype => {
                this.props.setSubtype(subtype.data.data)
            });
        }
        return (<>
            <Filter
                typepoke={this.props.typepoke}
                subtypepoke={this.props.subtypepoke}
                newSearchPokemon={this.props.newSearchPokemon}
                searchPokemon={this.props.searchPokemon}
                searchPokemonName={this.props.searchPokemonName}
                searchpokemonType={this.props.searchpokemonType}
                searchPokemonSubtype={this.props.searchPokemonSubtype}
            />
        </>
        )
    }
}

let mapStateToProps = (state) => ({
    typepoke: state.filterPage.typepoke,
    subtypepoke: state.filterPage.subtypepoke,
    searchPokemon: state.filterPage.searchPokemon,

});
let mapDispatchToProps = (dispatch) => {
    return {
        setTypePoke: (typepoke) => {
            dispatch(setTypeAC(typepoke));
        },
        setSubtype: (subtypepoke) => {
            dispatch(setSubTypeAC(subtypepoke));
        },
        newSearchPokemon: (searchPokemonName, searchPokemonType, searchPokemonSubtype) => {
            dispatch(searchPokemonAC(searchPokemonName, searchPokemonType, searchPokemonSubtype))
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(FilterContainer);
