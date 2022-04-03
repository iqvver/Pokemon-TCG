import * as React from 'react';
import './Filter.css';
import { Field, reduxForm } from 'redux-form';

let Filter = (props) => {

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
                <SearchPokemonForm onSubmit={searchNewPokemon} />
            </div>
            <div className='card-Block'>
                {typePokemonsArr} <br /> <br />
                {subtypePokemonsArr} <br /> <br />
                name: {props.searchPokemon.pokemonName} <br /> <br />
                type: {props.searchPokemon.pokemonType} <br /> <br />
                subtype: {props.searchPokemon.pokemonSubtype} <br /> <br />
            </div>
        </div>
    )
}
let searchPokemon = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className='filter-Container'>
                <div className='filter-Block'>
                    <div>
                        <Field
                            name="searchPokemonName"
                            component='input'
                            type='text'
                            placeholder='Enter search pokemon type'
                        />
                        <br /><Field
                            name="searchPokemonType"
                            component='input'
                            type='text'
                            placeholder='Enter search pokemon type'
                        />
                        <br /><Field
                            name="searchPokemonSubtype"
                            component='input'
                            type='text'
                            placeholder='Enter search pokemon type'
                        />
                        <br />
                        <div>
                            <button>Получить</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
};

const SearchPokemonForm = reduxForm({
    form: 'pokemonSearchForm',
})(searchPokemon);


export default Filter;