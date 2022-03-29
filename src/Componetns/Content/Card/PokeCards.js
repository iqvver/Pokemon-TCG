import *as React from 'react'
import '../Content.css';
import { Grid } from '@mui/material';
import Pokemon from './Pokemon';
import PaginatorUi from '../../../Common/PaginatorUi';

let PokeCards = (props) => {
    return (
        <>
            <div className='pagination-Block'>
                <PaginatorUi currentPage={props.currentPage}
                    onPageChanged={props.onPageChanged}
                    totalCount={props.totalCount}
                    pagesCount={props.pagesCount}
                    pageSize={props.pageSize} />
            </div>
            <Grid container className="containerGrid">
                {props.pokemons.map(pokemonCard =>
                    <Pokemon p={pokemonCard} />)
                }
            </Grid>
        </>
    )
}

export default PokeCards;