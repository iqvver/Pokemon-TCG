import {combineReducers, createStore} from "redux";
import pokecardReducer from "./pokecard-reducer";

let reducers = combineReducers({
    pokemonCardPage: pokecardReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;