import { typePokemonAPI, subtypePokemonAPI } from "../Api/Api";

const SET_TYPE_POKEMON = 'SET_TYPE_POKEMON'; // перенная для получения типа покемона
const SET_SUBTYPE_POKEMON = 'SET_SUBTYPE_POKEMON'; // перенная для получения подтипа покемона
const SEARCH_POKEMON = 'SEARCH_POKEMON'; // перенная для фильтрации покемона

// иноциализация переменных
let initialState = {
    typePokemon: [], // массив типов покемона
    subtypePokemon: [], // массив подтипов покемона
    // переменные для поиска покемонов
    searchPokemon: {
        pokemonName: '',
        pokemonType: '',
        pokemonSubtype: ''
    }
};

// редьюсер фильтрации карточек покемонов
const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TYPE_POKEMON: {
            // получение типов покемонов
            return { ...state, typePokemon: action.typePokemon }
        }

        case SET_SUBTYPE_POKEMON: {
            // получение подтипов покемонов
            return { ...state, subtypePokemon: action.subtypePokemon }
        }

        case SEARCH_POKEMON: {
            // фильтрация карточек покемонов
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

// экшен для получения типов покемонов
export const setTypePokemonAC = (typePokemon) => ({ type: SET_TYPE_POKEMON, typePokemon });
// экшен для получения подтипов покемонов
export const setSubtypePokemonAC = (subtypePokemon) => ({ type: SET_SUBTYPE_POKEMON, subtypePokemon });
// экшен для фильтрации карточек покемонов
export const searchPokemonAC = (searchPokemonName, searchPokemonType, searchPokemonSubtype) =>
    ({ type: SEARCH_POKEMON, searchPokemonName, searchPokemonType, searchPokemonSubtype });

// получение, обработка и отправка типов покемонов
// ассинхронный экшен
export const getTypePokemon = (typePokemon) => {
    return async (dispatch) => {
        let type = await typePokemonAPI.getTypePokemon(typePokemon);
        if (typePokemon.length === 0) {
        dispatch(setTypePokemonAC(type.data));
        }
    }
}
// получение, обработка и отправка типов покемонов из API
// ассинхронный экшен
export const getSubtypePokemon = (subtypePokemon) => {
    return async (dispatch) => {
        let subtype = await subtypePokemonAPI.getSubtypePokemon(subtypePokemon);
        debugger;
        if (subtypePokemon.length === 0) {
        dispatch(setSubtypePokemonAC(subtype.data));
        }
    }
}

// получение, обработка поиска
export const newSearchPokemon = (searchPokemonName, searchPokemonType, searchPokemonSubtype) =>(dispatch) => {
        dispatch(searchPokemonAC(searchPokemonName, searchPokemonType, searchPokemonSubtype));
    }

export default filterReducer;