import *as React from 'react'
import './PokeCards.css';
import { Grid } from '@mui/material';
import Pokemon from './Pokemon';
import PaginatorUi from '../../../Common/Paginator/PaginatorUi';

let PokeCards = (props) => {
    return (
        <>
            <Grid className='pagination-Block'>
                <PaginatorUi
                    currentPage={props.currentPage}
                    onPageChanged={props.onPageChanged}
                    totalCount={props.totalCount}
                    pagesCount={props.pagesCount}
                    pageSize={props.pageSize} />
            </Grid>
            <Grid container className="containerGrid">
                {props.pokemons.map(pokemonCard =>
                    <Pokemon p={pokemonCard} />)
                }
            </Grid>
        </>
    )
}

export default PokeCards;