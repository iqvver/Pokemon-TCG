//import { pokeCardAPI } from '../Api/Api'

const SET_POKE = 'SET_POKE';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_POKEMONS_COUNT = 'SET_TOTAL_POKEMONS_COUNT';

let initialState = {
    pokemons: [],
    pageSize: 250,
    totalCount: 0,
    currentPage: 1,
};

const pokecardReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_POKE: {
            return { ...state, pokemons: action.pokemons }
        }

        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }

        case SET_TOTAL_POKEMONS_COUNT: {
            return { ...state, totalCount: action.count }
        }
        
        default:
            return state;
    }
}

export const setPokemonsAC = (pokemons) => ({ type: SET_POKE, pokemons });
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setPokemonsTotalCountAC = (totalCount) => ({type: SET_TOTAL_POKEMONS_COUNT, count: totalCount })

export default pokecardReducer;