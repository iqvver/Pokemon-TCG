const SET_TYPE_POKE = 'SET_TYPE_POKE';
const SET_SUBTYPE_POKE = 'SET_SUBTYPE_POKE';
const SEARCH_POKEMON = 'SEARCH_POKEMON';

let initialState = {
    typepoke: [],
    subtypepoke: [],
    searchPokemon: {
        pokemonName: '',
        pokemonType: '',
        pokemonSubtype: ''
    }
};

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TYPE_POKE: {
            return { ...state, typepoke: action.typepoke }
        }
        case SET_SUBTYPE_POKE: {
            return { ...state, subtypepoke: action.subtypepoke }
        }

        case SEARCH_POKEMON: {
            let pName = action.searchPokemonName;
            let pType = action.searchPokemonType;
            let pSubtype = action.searchPokemonSubtype;

            return {
                ...state,
                searchPokemon: {
                    pokemonName: pName,
                    pokemonType: pType,
                    pokemonSubtype: pSubtype
                }
            };
        }
        default:
            return state;
    }
}

export const setTypeAC = (typepoke) => ({ type: SET_TYPE_POKE, typepoke });
export const setSubTypeAC = (subtypepoke) => ({ type: SET_SUBTYPE_POKE, subtypepoke });
export const searchPokemonAC = (searchPokemonName, searchPokemonType, searchPokemonSubtype) =>
    ({ type: SEARCH_POKEMON, searchPokemonName, searchPokemonType, searchPokemonSubtype });

export default filterReducer;