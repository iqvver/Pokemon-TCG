//import { pokeCardAPI } from '../Api/Api'

const SET_POKE = 'SET_POKE';
const SET_CURRENT_PAGE = 'USERS/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'USERS/SET_TOTAL_USERS_COUNT';

let initialState = {
    pokemons: [],
    pageSize: 4,
    totalUsersCount: 0,
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
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count }
        }

        default:
            return state;
    }
}

export const setPokemonsAC = (pokemons) => ({ type: SET_POKE, pokemons })

export default pokecardReducer;