import * as React from 'react';
import './Filter.css';
import Pokemon from '../Card/CardPokemon/Pokemon';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../../Common/FormsControls/FormsControls';
import { Button, MenuItem, Grid } from '@mui/material';
import PaginatorUi from '../../../Common/Paginator/PaginatorUi';

// форма для фильтрации и поиска карточки покемона
const searchPokemon = ({ handleSubmit, typePokemon, subtypePokemon }) => {
    return (
        <form className='filterForm' onSubmit={handleSubmit}>
            <Field
                name={"searchPokemonName"}
                component={Input}
                fullWidth
                type={'text'}
                variant={'standard'}
                label={'Search for pokemon by name'}
                placeholder={'Search for pokemon by name'}
                helperText="Please enter a name" />
            <Field
                name={"searchPokemonType"}
                component={Input}
                fullWidth
                type={'text'}
                variant={'standard'}
                label={'Search for pokemon by type'}
                placeholder={'Search for pokemon by type'}
                helperText="Please select type"
                select >
                {typePokemon.map(pokemonType =>
                    <MenuItem key={pokemonType} value={pokemonType}>
                        {pokemonType}
                    </MenuItem>)}
            </Field>
            <Field
                name={"searchPokemonSubtype"}
                component={Input}
                fullWidth
                type={'text'}
                variant={'standard'}
                label={'Search for pokemon by subtype'}
                placeholder={'Search for pokemon by subtype'}
                helperText="Please select subtype"
                select >
                {subtypePokemon.map(pokemonSubtype =>
                    <MenuItem key={pokemonSubtype} value={pokemonSubtype}>
                        {pokemonSubtype}
                    </MenuItem>)}
            </Field>
            <br />
            <div>
                <Button type="submit">Search</Button>
            </div>
        </form>
    )
};

const SearchPokemonForm = reduxForm({
    form: 'pokemonSearchForm',
})(searchPokemon);

// страница с формой фильтрации и вывода нужных карточек покемонов
const Filter = ({ typePokemon, searchPokemon, subtypePokemon, newSearchPokemon,
    pokemons, pageSize, currentPage, onPageChanged, filteredName }) => {

    const filterNamePokemonArr = pokemons.filter(filterPokemon =>
        filterPokemon.name == searchPokemon.pokemonName);
    const filterTypePokemonArr = pokemons.filter(filterPokemon =>
        filterPokemon.types == searchPokemon.pokemonType);
    const filterSubtypePokemonArr = pokemons.filter(filterPokemon =>
        filterPokemon.subtypes == searchPokemon.pokemonSubtype);
    const filterTypePlusSubtypePokemonArr = pokemons.filter(filterPokemon =>
        filterPokemon.types == searchPokemon.pokemonType &&
        filterPokemon.subtypes == searchPokemon.pokemonSubtype);

    let searchNewPokemon = (value) => {
        newSearchPokemon(value.searchPokemonName, value.searchPokemonType, value.searchPokemonSubtype);
        value.searchPokemonName = '';
        value.searchPokemonType = '';
        value.searchPokemonSubtype = '';
    }
    return (
        <>
            <h4>Search Parameters:</h4>
            <div className='searchParameters'>
                <span className='searchName'>NAME: {searchPokemon.pokemonName}</span>
                <span className='searchType'>TYPE: {searchPokemon.pokemonType}</span>
                <span className='searchSubtype'>SUBTYPE: {searchPokemon.pokemonSubtype}</span>
            </div>
            <div className='filterCard'>
                <hr size='1' color="" />
                <div className='filterBlock'>
                    <SearchPokemonForm onSubmit={searchNewPokemon}
                        typePokemon={typePokemon}
                        subtypePokemon={subtypePokemon}
                    />
                </div>
                <div className='cardBlock'>
                    <Grid container className='paginatorFilterContainer'>
                        <PaginatorUi
                            currentPage={currentPage}
                            onPageChanged={onPageChanged}
                            totalCount={filteredName.length}
                            pageSize={pageSize} />
                    </Grid>
                    <br />
                    <span>Всего найдено: {
                        filteredName.length
                    } покемонов</span>
                    <Grid container className='pokemonFilterContainer'>

                        {filteredName.map(pokemonCard =>
                            <Pokemon pokemon={pokemonCard} />)}
                        {/*
                            (filterNamePokemonArr.length > 0) &&
                                (filterTypePokemonArr.length == 0) &&
                                (filterSubtypePokemonArr.length == 0)
                                ? filterNamePokemonArr.map(pokemonCard =>
                                    <Pokemon pokemon={pokemonCard} />)
                                :
                                (filterNamePokemonArr.length == 0) &&
                                    (filterTypePokemonArr.length > 0) &&
                                    (filterSubtypePokemonArr.length == 0)
                                    ? filterTypePokemonArr.map(pokemonCard =>
                                        <Pokemon pokemon={pokemonCard} />)

                                    : (filterNamePokemonArr.length == 0) &&
                                        (filterTypePokemonArr.length == 0) &&
                                        (filterSubtypePokemonArr.length > 0)
                                        ? filterSubtypePokemonArr.map(pokemonCard =>
                                            <Pokemon pokemon={pokemonCard} />)

                                        : (filterNamePokemonArr.length == 0) &&
                                            (filterTypePokemonArr.length > 0) &&
                                            (filterSubtypePokemonArr.length > 0)
                                            ? filterTypePlusSubtypePokemonArr.map(pokemonCard =>
                                                <Pokemon pokemon={pokemonCard} />)
                                            :
                                            pokemons.map(pokemonCard =>
                                                <Pokemon pokemon={pokemonCard} />)
                                            */}
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default Filter;