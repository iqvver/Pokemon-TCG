import * as React from 'react';
import './Filter.css';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../../Common/FormsControls/FormsControls';
import { Button, MenuItem } from '@mui/material';

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
const Filter = ({ typePokemon, searchPokemon, subtypePokemon, newSearchPokemon }) => {
    const typePokemonsArr = typePokemon.filter(typePokemon =>
        typePokemon !== searchPokemon.pokemonType);
    const subtypePokemonsArr = subtypePokemon.filter(subtypePokemon =>
        subtypePokemon !== searchPokemon.pokemonSubtype);

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
                <span className='searchName'>name: {searchPokemon.pokemonName}</span>
                <span className='searchType'>type: {searchPokemon.pokemonType}</span>
                <span className='searchSubtype'>subtype: {searchPokemon.pokemonSubtype}</span>
            </div>
            <div className='filterCard'>
                <div className='filterBlock'>
                    <SearchPokemonForm onSubmit={searchNewPokemon}
                        typePokemon={typePokemon}
                        subtypePokemon={subtypePokemon}
                    />
                </div>
                <div className='cardBlock'>
                    {typePokemonsArr} <br /> <br />
                    {subtypePokemonsArr} <br /> <br />
                </div>
            </div>
        </>
    )
}

export default Filter;