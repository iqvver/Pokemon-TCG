import React from 'react';
import PokeCard from "./PokeCard";
import * as axios from "axios";
import { connect } from "react-redux";
import { setPokemonsProfile } from '../../../redux/card-reducer'

class CardContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://api.pokemontcg.io/v2/cards/ecard2-H1`)
            .then(response => {
                this.props.setPokemonsProfile(response.data);
            });
    }

    render() {
        return (
            <PokeCard {...this.props} pokemonsProfile={this.props.pokemonsProfile} />
        )
    }
}

let mapStateToProps = (state) => ({
    pokemonsProfile: state.pokemonsProfilePage.pokemonsProfile
});

export default connect(mapStateToProps, { setPokemonsProfile })(CardContainer);