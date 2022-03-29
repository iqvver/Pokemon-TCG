import React from 'react'
import { Card, CardContent, CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

let Pokemon = ({ p, ...props }) => {
    return (
        <Card>
            <CardMedia className="cardMediaGrid" xs={4} xs={8}>
                <NavLink to={'/cards/' + p.id}>
                    <img src={p.images.small} className='pokeCard' /> </NavLink>
                <CardContent className='cardContent'>
                    <Typography gutterBottom variant="h7" component="div">
                        <div>Имя:{p.name}</div>
                        <div>Тип:{p.types}</div>
                        <div>Хозяин:{p.artist}</div>
                    </Typography>
                </CardContent>
            </CardMedia>
        </Card>
    )
}

export default Pokemon;