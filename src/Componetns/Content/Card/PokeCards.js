import React from 'react'
import * as axios from "axios"
import '../Content.css';
import { Card, CardContent, CardMedia, Container, Grid } from '@mui/material';

let PokeCards = (props) => {
    if (props.pokemons.length === 0) {
        axios.get("https://api.pokemontcg.io/v2/cards").then(card => {
            props.setPokemons(card.data.data)
        });
    }

    return <Container className="containerGrid" maxWidth='md'>
            <Grid container spacing={4}>
                {
                    props.pokemons.map(p => <Grid className="cardGrid" xs={12} sm={6} md={4} key={p.id}>
                        <Card>
                            <CardMedia className="cardMediaGrid" xs={4} xs={8}>
                                <img src={p.images.small} />
                                <CardContent>
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
    
}

export default PokeCards;