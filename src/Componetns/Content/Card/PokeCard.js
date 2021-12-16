import * as React from 'react';
import './PokeCard.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Divider } from '@material-ui/core';

const PokeCard = (props) => {

    if (!props.pokemonsProfile) {
        return <di> gg! </di>
    }
    return (
        <div className='pokeCard-Block'>
            <Card sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '' }}>
                        <div className='infoBlock'>
                            <div><h2>{props.pokemonsProfile.data.name}</h2></div>
                            <div className='general'>
                                <h4>General informations</h4>
                                <Divider />
                                <div>Set identifier  {props.pokemonsProfile.data.number}</div>
                                <div>{props.pokemonsProfile.data.rarity}  {props.pokemonsProfile.data.supertype}</div>
                                <div>Illustrated by  {props.pokemonsProfile.data.artist}</div>
                            </div>
                            <div className='informations'>
                                <h4>Vullaby's informations</h4>
                                <Divider />
                                <div>National Pokédex No  {props.pokemonsProfile.data.nationalPokedexNumbers}</div>
                                <div>{props.pokemonsProfile.data.hp}  HP</div>
                                <div>{props.pokemonsProfile.data.types}  type Card</div>
                                <div>{props.pokemonsProfile.data.subtypes}  {props.pokemonsProfile.data.supertype}</div>
                            </div>
                            <div className='attacks'>
                            <h4>Vullaby's Attacks</h4>
                                <Divider />
                                <div>{props.pokemonsProfile.data.attacks[0].name}</div>
                                <div>{props.pokemonsProfile.data.attacks[0].text}</div>
                                <div>{props.pokemonsProfile.data.attacks.name}
                                    {props.pokemonsProfile.data.attacks.damage}</div>
                            </div>
                            <div className='foot'>
                            <h4>Other Informations</h4>
                                <Divider />
                                {props.pokemonsProfile.data.weaknesses[0].type}
                                {props.pokemonsProfile.data.weaknesses[0].value} <br />
                                {props.pokemonsProfile.data.retreatCost}
                            </div>
                        </div>
                    </CardContent>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 500,
                    height: 700 }}
                    image={props.pokemonsProfile.data.images.large}
                    alt="Live from space album cover"
                />
            </Card>






        </div >
    )
}
export default PokeCard;