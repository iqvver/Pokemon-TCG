import { typePokemonAPI, subtypePokemonAPI, filterPokemonsAPI } from "../Api/Api";

const SET_TYPE_POKEMON = 'SET_TYPE_POKEMON'; // перенная для получения типа покемона
const SET_SUBTYPE_POKEMON = 'SET_SUBTYPE_POKEMON'; // перенная для получения подтипа покемона
const SEARCH_POKEMON = 'SEARCH_POKEMON'; // перенная для фильтрации покемона
const SET_FILTERED = 'SET_FILTERED'; // переменная отфильтрованных карточек покемонов
const SET_CURRENT_FILTER_PAGE = 'SET_CURRENT_FILTER_PAGE'; // перенная для получения одной страници 
const SET_TOTAL_FILTER_POKEMONS_COUNT = 'SET_TOTAL_FILTER_POKEMONS_COUNT'; // перенная для получения всех карточек
const IS_FILTER_FETCHING = 'IS_FILTER_FETCHING'; // переменная закгузки отфильтрованного массива

// иноциализация переменных
let initialState = {
    typePokemon: [], // массив типов покемона
    subtypePokemon: [], // массив подтипов покемона
    // переменные для поиска покемонов
    searchPokemon: {
        pokemonName: '',
        pokemonType: '',
        pokemonSubtype: ''
    },
    filteredPokemon: [], // массив отфильтрованных карточек покемонов
    pageFilterSize: 250, // размер страници
    totalCount: 0, // общее число карточек покемонов по умолчению 0
    currentPage: 1, // выбранная сраница карточек покемонов по умолчанию 1
    isFilterFetching: false, // загрузка
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

        case SET_FILTERED: {
            // получение отфильтрованного массива
            return { ...state, filteredPokemon: action.filteredPokemon }
        }

        case SET_CURRENT_FILTER_PAGE: {
            // получение определённой страници
            return { ...state, currentPage: action.currentPage }
        }

        case SET_TOTAL_FILTER_POKEMONS_COUNT: {
            // получение общего числа карточек
            return { ...state, totalCount: action.count }
        }

        case IS_FILTER_FETCHING: {
            // загрузка on/off
            return { ...state, isFilterFetching: action.isFilterFetching }
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

export const setCurrentFilterPageAC = (currentPage) => ({ type: SET_CURRENT_FILTER_PAGE, currentPage });
// экшен для получения общего числа карточек
export const setPokemonsTotalFilterCountAC = (totalCount) => ({ type: SET_TOTAL_FILTER_POKEMONS_COUNT, count: totalCount })
// экшен загрузки
export const setIsFilterFetchingAC = (isFilterFetching) => ({ type: IS_FILTER_FETCHING, isFilterFetching })
// получение, обработка и отправка отфильтрованного массива карточек
// ассинхронный экшен
export const setFilteredPokemonAC = (filteredPokemon) => ({ type: SET_FILTERED, filteredPokemon });
export const getFilterPokemons = (currentPage, pageFilterSize, filteredPokemon) => {
    return async (dispatch) => {
        dispatch(setIsFilterFetchingAC(true));
        let card = await filterPokemonsAPI.getFilterPokemons(currentPage, pageFilterSize, filteredPokemon);
        dispatch(setIsFilterFetchingAC(false));
        dispatch(setFilteredPokemonAC(card.data));
        dispatch(setPokemonsTotalFilterCountAC(card.totalCount));
    }
}
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
        if (subtypePokemon.length === 0) {
            dispatch(setSubtypePokemonAC(subtype.data));
        }
    }
}

// получение, обработка поиска
export const newSearchPokemon = (searchPokemonName, searchPokemonType, searchPokemonSubtype) => (dispatch) => {
    dispatch(searchPokemonAC(searchPokemonName, searchPokemonType, searchPokemonSubtype));
}

export default filterReducer;