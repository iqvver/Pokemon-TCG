import *as React from 'react'
import usePagination from '@mui/material/usePagination';
import Button from '@mui/material/Button';
import '../Content.css';
import '../../../App.css';
import { Card, CardContent, CardMedia, Container, Grid } from '@mui/material';
import NavbarContainer from '../../Hav/NavbarContainer';
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
    if (!props.totalCount) {
        <div className='preloader'> gg! </div>
    } return (
        <div>
            <div className='App-navBar'>
                <NavbarContainer />
            </div>
            <div className='pagination-Block'>
                {items.map(({ page, type, selected, ...item }, index) => {
                    let children = null;
                    if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                        children = '…';
                    } else if (type === 'page') {
                        children = (
                            <div
                                type="button"
                                style={{
                                    fontWeight: selected ? 'bold' : undefined,
                                    color: selected ? '#000' : undefined,
                                }}
                                {...item}
                            >
                                {page}
                            </div>
                        );
                    } else {
                        children = (
                            <div type="button" {...item}>
                                {type}
                            </div>
                        );
                    }
                    return <Button variant="contained" key={index} onClick={(e) => { props.onPageChanged(page); }}>{children}</Button>;
                })}
            </div>

            <Container className="containerGrid" maxWidth='md'>
                <Grid container spacing={4}>
                    {props.pokemons.map(p => <Grid className="cardGrid" xs={12} sm={6} md={4} key={p.id}>
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
            </Container>
        </div>
    )
}

export default PokeCards;