import React from 'react'
import * as axios from "axios"
import '../Content.css';
import { Card, CardContent, CardMedia, Container, Grid } from '@mui/material';

let PokeCards = (props) => {
    if (props.pokemons.length === 0) {
        axios.get(`https://api.pokemontcg.io/v2/cards?page=${props.currentPage}&count=${props.pageSize}`).then(card => {
            props.setPokemons(card.data.data);
            debugger;
            props.setPokemonsTotalCount(card.data.totalCount);
        });
    }
let onPageChanged = (pageNumber) => {
    props.setCurrentPage(pageNumber);
    axios.get(`https://api.pokemontcg.io/v2/cards?page=${pageNumber}&count=${props.pageSize}`).then(card => {
            props.setPokemons(card.data.data)
        });
}

    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    
    return <div>
        
        
        
        <Container className="containerGrid" maxWidth='md'>
        <div className='pagination-Block'>
            {pages.map(pag => {
               return <span className={props.currentPage === pag && 'selected-Page'}
               onClick={(e) => {onPageChanged(pag)}}>{pag}</span>
            })}
        </div>
            <Grid container spacing={4}>
                {
                    props.pokemons.map(p => <Grid className="cardGrid" xs={12} sm={6} md={4} key={p.id}>
                        <Card>
                            <CardMedia className="cardMediaGrid" xs={4} xs={8}>
                                <img src={p.images.small} />
                                <CardContent className='cardContent'>
                                    <div>Имя:{p.name}</div>
                                    <div>Тип:{p.types}</div>
                                    <div>Хозяин:{p.artist}</div>
                                </CardContent>
                            </CardMedia>
                        </Card>
                    </Grid>)
                }
            </Grid>
        </Container>
    </div>
}

export default PokeCards;