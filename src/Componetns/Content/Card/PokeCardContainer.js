import React from 'react';
import { connect } from "react-redux";
import { getPokemons } from '../../../redux/pokecard-reducer';
import LinearProgress from '@mui/material/LinearProgress';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../Hoc/withAuthRedirect';
import { Grid } from '@mui/material';
import './PokeCards.css';
import PaginatorUi from '../../../Common/Paginator/PaginatorUi';
import Pokemon from './Pokemon';

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
            <Grid container className='pagination-Block'>
                <PaginatorUi
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    totalCount={this.props.totalCount}
                    pagesCount={this.props.pagesCount}
                    pageSize={this.props.pageSize} />
            </Grid>
            <Grid container className="containerGrid">
                {this.props.pokemons.map(pokemonCard =>
                    <Pokemon pokemon={pokemonCard} />)
                }
            </Grid>
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

export default compose(connect(
    mapStateToProps, { getPokemons }), withAuthRedirect)(pokeCardContainer);
