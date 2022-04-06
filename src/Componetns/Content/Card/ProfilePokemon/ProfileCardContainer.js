import React from 'react';
import { connect } from "react-redux";
import { getProfilePokemon } from '../../../../redux/pokemonProfile-reducer'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../../Hoc/withAuthRedirect';
import ProfilePokeCard from './ProfilePokeCard';
import { Grid } from '@mui/material';
import '../PokeCards.css';

class ProfileCardContainer extends React.Component {
    componentDidMount() {
        let pokemonId = this.props.match.params.pokemonId;
        this.props.getProfilePokemon(pokemonId);
    }
    render() {
        return (
            <Grid container className='profilePokeCardContainer'>
                <ProfilePokeCard {...this.props} pokemonsProfile={this.props.pokemonsProfile} />
            </Grid>
        )
    }
}

let mapStateToProps = (state) => ({
    pokemonsProfile: state.pokemonsProfilePage.pokemonsProfile
});

export default compose(connect(mapStateToProps, { getProfilePokemon }),
    withRouter,
    withAuthRedirect)(ProfileCardContainer);