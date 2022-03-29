import { applyMiddleware, combineReducers, createStore, compose } from "redux"
import navbarReducer from "./navbar-reducer";
import pokecardReducer from "./pokecard-reducer";
import cardReducer from "./card-reducer";
import authReducer from "./auth-reducer";
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    pokemonCardPage: pokecardReducer,
    navbarPage: navbarReducer,
    pokemonsProfilePage: cardReducer,
    isAuth: authReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;