import React from 'react';
import PokeCard from "./PokeCard";
import * as axios from "axios";
import { connect } from "react-redux";
import { setPokemonsProfile } from '../../../redux/card-reducer'
import { withRouter } from 'react-router-dom';


class CardContainer extends React.Component {
    componentDidMount() {
        let pokeId = this.props.match.params.pokeId;
        axios.get(`https://api.pokemontcg.io/v2/cards/` + pokeId)
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

let WithUrlDataContainerComponent = withRouter(CardContainer);

export default connect(mapStateToProps, { setPokemonsProfile })(WithUrlDataContainerComponent);