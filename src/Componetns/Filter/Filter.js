import * as React from 'react';
import './Filter.css';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../Common/FormsControls/FormsControls';
import { Button, MenuItem } from '@mui/material';

const searchPokemon = (props) => {
    return (
        <form className='filter-Block' onSubmit={props.handleSubmit}>
            <Field
                placeholder={'Search for pokemon by name'}
                name={"searchPokemonName"}
                component={Input}
                type={'text'}
                variant={'standard'}
                label={'Search for pokemon by name'}
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
                {props.typepoke.map(pokemonType =>
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
                {props.subtypepoke.map(pokemonSubtype =>
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


const Filter = (props) => {
    const typePokemonsArr = props.typepoke.filter(typePokemon =>
        typePokemon !== props.searchPokemon.pokemonType);
    const subtypePokemonsArr = props.subtypepoke.filter(subtypePokemon =>
        subtypePokemon !== props.searchPokemon.pokemonSubtype);

    let searchNewPokemon = (value) => {
        props.newSearchPokemon(value.searchPokemonName, value.searchPokemonType, value.searchPokemonSubtype);
        value.searchPokemonName = '';
        value.searchPokemonType = '';
        value.searchPokemonSubtype = '';
    }
    return (
        <div className='filter-Container'>
            <div className='filter-Block'>
                <SearchPokemonForm onSubmit={searchNewPokemon}
                    typepoke={props.typepoke}
                    subtypepoke={props.subtypepoke}
                />
            </div>
            <div className='card-Block'>
                name: {props.searchPokemon.pokemonName} <br /> <br />
                {typePokemonsArr} <br /> <br />
                type: {props.searchPokemon.pokemonType} <br /> <br />
                {subtypePokemonsArr} <br /> <br />
                subtype: {props.searchPokemon.pokemonSubtype} <br /> <br />
            </div>
        </div>
    )
}

export default Filter;