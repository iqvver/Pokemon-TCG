import * as React from 'react';
import './Filter.css';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../../Common/FormsControls/FormsControls';
import { Button, MenuItem } from '@mui/material';

const searchPokemon = ({handleSubmit, typePokemon, subtypePokemon}) => {
    return (
        <form className='filter-Form' onSubmit={handleSubmit}>
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
                {typePokemon.map(pokemonType =>
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
                {subtypePokemon.map(pokemonSubtype =>
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


const Filter = ({typePokemon, searchPokemon, subtypePokemon, newSearchPokemon}) => {
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
        <div className='filterCard'>
            <div className='filter-Block'>
                <SearchPokemonForm onSubmit={searchNewPokemon}
                    typePokemon={typePokemon}
                    subtypePokemon={subtypePokemon}
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