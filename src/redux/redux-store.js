import {combineReducers, createStore} from "redux";
import navbarReducer from "./navbar-reducer";
import pokecardReducer from "./pokecard-reducer";
import cardReducer from "./card-reducer";

let reducers = combineReducers({
    pokemonCardPage: pokecardReducer,
    navbarPage: navbarReducer,
    pokemonsProfilePage: cardReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;