import {combineReducers, createStore} from "redux";
import navbarReducer from "./navbar-reducer";
import pokecardReducer from "./pokecard-reducer";
import cardReducer from "./card-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    pokemonCardPage: pokecardReducer,
    navbarPage: navbarReducer,
    pokemonsProfilePage: cardReducer,
    auth: authReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;