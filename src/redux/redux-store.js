import { applyMiddleware, combineReducers, createStore, compose } from "redux"
import pokecardReducer from "./pokecard-reducer";
import cardReducer from "./card-reducer";
import authReducer from "./auth-reducer";
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk'
import filterReducer from "./filter-reducer";

let reducers = combineReducers({
    pokemonCardPage: pokecardReducer,
    filterPage: filterReducer,
    pokemonsProfilePage: cardReducer,
    isAuth: authReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;