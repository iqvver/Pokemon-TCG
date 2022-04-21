import { profilePokemonAPI } from "../Api/Api";

const SET_POKEMONS_PROFILE = 'SET_POKEMONS_PROFILE'; // перенная для получения профиля покемона

// иноциализация переменных
let initialState = {
    pokemonsProfile: null // переменная профиля 
};
// редьюсер профиля покемона
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMONS_PROFILE: {
            // получение профиля покемона
            return { ...state, pokemonsProfile: action.pokemonsProfile }
        }
        default:
            return state;
    }
}

// экшен для получение профиля покемона
export const setProfilePokemon = (pokemonsProfile) => ({ type: SET_POKEMONS_PROFILE, pokemonsProfile });

// получение, обработка и отправка профиля покемона
// ассинхронный экшен
export const getProfilePokemon = (pokemonId) => async (dispatch) => {
    let profile = await profilePokemonAPI.getProfile(pokemonId);
    dispatch(setProfilePokemon(profile.data));
}

export default profileReducer;