import { pokemonsAPI } from '../Api/Api'

const SET_POKEMONS = 'SET_POKEMONS'; // перенная для получения всех покемонов
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'; // перенная для получения одной страници 
const SET_TOTAL_POKEMONS_COUNT = 'SET_TOTAL_POKEMONS_COUNT'; // перенная для получения всех карточек
const IS_FETCHING = 'IS_FETCHING';

// иноциализация переменных
let initialState = {
    pokemons: [], // массив покемонов
    pageSize: 250, // размер страници
    totalCount: 0, // общее число карточек покемонов по умолчению 0
    currentPage: 1, // выбранная сраница карточек покемонов по умолчанию 1
    isFetching: false, // загрузка
};

// редьюсер получения массива карточек покемонов
const pokemonCardReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_POKEMONS: {
            // получение карточек 
            return { ...state, pokemons: action.pokemons }
        }

        case SET_CURRENT_PAGE: {
            // получение определённой страници
            return { ...state, currentPage: action.currentPage }
        }

        case SET_TOTAL_POKEMONS_COUNT: {
            // получение общего числа карточек
            return { ...state, totalCount: action.count }
        }

        case IS_FETCHING: {
            // загрузка on/off
            return { ...state, isFetching: action.isFetching }
        }

        default:
            return state;
    }
}

// экшен для получения карточек
export const setPokemonsAC = (pokemons) => ({ type: SET_POKEMONS, pokemons });
// экшен для получения определённой страници
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
// экшен для получения общего числа карточек
export const setPokemonsTotalCountAC = (totalCount) => ({ type: SET_TOTAL_POKEMONS_COUNT, count: totalCount })
// экшен загрузки
export const setIsFetchingAC = (isFetching) => ({ type: IS_FETCHING, isFetching })

// получение, обработка и отправка карточек покемонов
// ассинхронный экшен
export const getPokemons = (currentPage, pageSize, pokemons) => {
    return async (dispatch) => {
        dispatch(setIsFetchingAC(true));
        let card = await pokemonsAPI.getPokemons(currentPage, pageSize, pokemons);
        dispatch(setIsFetchingAC(false));
        dispatch(setPokemonsAC(card.data));
        dispatch(setPokemonsTotalCountAC(card.totalCount));
    }
}

export default pokemonCardReducer;

