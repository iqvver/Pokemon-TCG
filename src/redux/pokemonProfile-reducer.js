import { profilePokemonAPI } from "../Api/Api";

const SET_POKEMONS_PROFILE = 'SET_POKEMONS_PROFILE';

let initialState = {
    pokemonsProfile: null
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMONS_PROFILE: {
            return { ...state, pokemonsProfile: action.pokemonsProfile }
        }
        default:
            return state;
    }
}

export const setProfilePokemon = (pokemonsProfile) => ({ type: SET_POKEMONS_PROFILE, pokemonsProfile });

export const getProfilePokemon = (pokemonId) => async (dispatch) => {
    let response = await profilePokemonAPI.getProfile(pokemonId);
    dispatch(setProfilePokemon(response.data));
}

export default profileReducer;