import *as React from 'react'
import usePagination from '@mui/material/usePagination';
import Button from '@mui/material/Button';
import '../Content.css';
import { Card, CardContent, CardMedia, Container, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';

let PokeCards = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    const { items } = usePagination({
        count: pagesCount,
    });
    return (
        <div>
            <div className='pagination-Block'>
                {items.map(({ page, type, selected, ...item }, index) => {
                    let children = null;
                    if (type === 'start-ellipsis' || type === 'end-ellipsis') { children = (<Button disabled variant="contained"> ... </Button>); }
                    else if (type === 'page') {
                        children = (
                            <Button variant="contained"
                                style={{
                                    fontWeight: selected ? 'bold' : undefined,
                                    color: selected ? '#000' : undefined,
                                }}
                                {...item}>
                                {page}
                            </Button>
                        );
                    } else {
                        children = (
                            <Button variant="contained"  {...item}>{type}</Button>
                        );
                    }
                    return <span key={index} onClick={() => { props.onPageChanged(page); }}>{children}</span>;
                })}
            </div>
            <Grid container className="containerGrid">
                {props.pokemons.map(p => <Grid className="cardGrid" key={p.id}>
                    <Card>
                        <CardMedia className="cardMediaGrid" xs={4} xs={8}>
                            <NavLink to={'/cards/' + p.id}>  <img src={p.images.small} className='pokeCard' /> </NavLink>
                            <CardContent className='cardContent'>
                                <Typography gutterBottom variant="h7" component="div">
                                    <div>Имя:{p.name}</div>
                                    <div>Тип:{p.types}</div>
                                    <div>Хозяин:{p.artist}</div>
                                </Typography>
                            </CardContent>
                        </CardMedia>
                    </Card>
                </Grid>)
                }
            </Grid>
        </div>
    )
}

export default PokeCards;