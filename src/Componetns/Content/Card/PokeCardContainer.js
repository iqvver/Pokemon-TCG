import React from 'react';
import { connect } from "react-redux";
import { getPokemons } from '../../../redux/pokecard-reducer';
import PokeCards from './PokeCards';
import '../Content.css';
import LinearProgress from '@mui/material/LinearProgress';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../Hoc/withAuthRedirect';

class pokeCardContainer extends React.Component {
    componentDidMount() {
        this.props.getPokemons(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getPokemons(pageNumber, this.props.pageSize);
    }
    componentDidUpdate(prevProps, prevState) {
        let a = this.state;
        let b = this.props;
        console.log('componentDidUpdate')
    }
    render() {
        return (<>
            {this.props.isFetching ? <LinearProgress /> : null}
            <PokeCards
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                pokemons={this.props.pokemons}
                setPokemons={this.props.setPokemons}
                setPokemonsTotalCount={this.props.setPokemonsTotalCount}
                setCurrentPage={this.props.setCurrentPage}
                isFetching={this.props.isFetching} />
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

export default compose(
    connect(mapStateToProps, { getPokemons }), withAuthRedirect)(pokeCardContainer);
