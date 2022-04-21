import { applyMiddleware, combineReducers, createStore, compose } from "redux"
import pokemonCardReducer from "./pokemonCard-reducer";
import profileReducer from "./pokemonProfile-reducer";
import authReducer from "./auth-reducer";
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk'
import filterReducer from "./pokemonFilter-reducer";

// комбайн со всеми редьюсерами
let reducers = combineReducers({
    pokemonCardPage: pokemonCardReducer,
    pokemonsProfilePage: profileReducer,
    filterPage: filterReducer,
    isAuth: authReducer,
    form: formReducer
});

//передача в стор
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;
export default store;