import React from 'react';
import { connect } from "react-redux";
import { setPokemonsProfile } from '../../../../redux/card-reducer'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../../Hoc/withAuthRedirect';
import { profileCardAPI } from '../../../../Api/Api';
import ProfilePokeCard from './ProfilePokeCard';

class ProfileCardContainer extends React.Component {
    componentDidMount() {
        let pokeId = this.props.match.params.pokeId;
        profileCardAPI.getCard(pokeId).then(response => {
            this.props.setPokemonsProfile(response.data);
        });
    }
    
    render() {
        return (
            <ProfilePokeCard {...this.props} pokemonsProfile={this.props.pokemonsProfile} />
        )
    }
}

let mapStateToProps = (state) => ({
    pokemonsProfile: state.pokemonsProfilePage.pokemonsProfile
});

export default compose(connect(mapStateToProps, { setPokemonsProfile }),
    withRouter,
    withAuthRedirect)(ProfileCardContainer);