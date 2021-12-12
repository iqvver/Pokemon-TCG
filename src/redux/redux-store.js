import {combineReducers, createStore} from "redux";
import navbarReducer from "./navbar-reducer";
import pokecardReducer from "./pokecard-reducer";

let reducers = combineReducers({
    pokemonCardPage: pokecardReducer,
    navbarPage: navbarReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;