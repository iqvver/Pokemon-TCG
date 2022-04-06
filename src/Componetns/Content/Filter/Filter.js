import * as React from 'react';
import './Filter.css';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../../Common/FormsControls/FormsControls';
import { Button, MenuItem } from '@mui/material';

const searchPokemon = ({handleSubmit, typepoke, subtypepoke}) => {
    return (
        <form className='filter-Block' onSubmit={handleSubmit}>
            <Field        
                name={"searchPokemonName"}
                component={Input}
                type={'text'}
                variant={'standard'}
                label={'Search for pokemon by name'}
                placeholder={'Search for pokemon by name'}
                helperText="Please enter a name" />
            <Field
                name={"searchPokemonType"}
                component={Input}
                type={'text'}
                variant={'standard'}
                label={'Search for pokemon by type'}
                placeholder={'Search for pokemon by type'}
                helperText="Please select type"
                select >
                {typepoke.map(pokemonType =>
                    <MenuItem key={pokemonType} value={pokemonType}>
                        {pokemonType}
                    </MenuItem>)}
            </Field>
            <Field
                name={"searchPokemonSubtype"}
                component={Input}
                type={'text'}
                variant={'standard'}
                label={'Search for pokemon by subtype'}
                placeholder={'Search for pokemon by subtype'}
                helperText="Please select subtype"
                select >
                {subtypepoke.map(pokemonSubtype =>
                    <MenuItem key={pokemonSubtype} value={pokemonSubtype}>
                        {pokemonSubtype}
                    </MenuItem>)}
            </Field>
            <br />
            <div>
                <Button type="submit">Получить</Button>
            </div>
        </form>
    )
};

const SearchPokemonForm = reduxForm({
    form: 'pokemonSearchForm',
})(searchPokemon);


const Filter = ({typepoke, searchPokemon, subtypepoke, newSearchPokemon}) => {
    const typePokemonsArr = typepoke.filter(typePokemon =>
        typePokemon !== searchPokemon.pokemonType);
    const subtypePokemonsArr = subtypepoke.filter(subtypePokemon =>
        subtypePokemon !== searchPokemon.pokemonSubtype);

    let searchNewPokemon = (value) => {
        newSearchPokemon(value.searchPokemonName, value.searchPokemonType, value.searchPokemonSubtype);
        value.searchPokemonName = '';
        value.searchPokemonType = '';
        value.searchPokemonSubtype = '';
    }
    return (
        <div className='filter-Container'>
            <div className='filter-Block'>
                <SearchPokemonForm onSubmit={searchNewPokemon}
                    typepoke={typepoke}
                    subtypepoke={subtypepoke}
                />
            </div>
            <div className='card-Block'>
                name: {searchPokemon.pokemonName} <br /> <br />
                {typePokemonsArr} <br /> <br />
                type: {searchPokemon.pokemonType} <br /> <br />
                {subtypePokemonsArr} <br /> <br />
                subtype: {searchPokemon.pokemonSubtype} <br /> <br />
            </div>
        </div>
    )
}

export default Filter;