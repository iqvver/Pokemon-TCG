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

export const setPokemonsProfile = (pokemonsProfile) => ({ type: SET_POKEMONS_PROFILE, pokemonsProfile });

export default profileReducer;