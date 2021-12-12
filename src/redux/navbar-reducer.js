const SET_TYPE_POKE = 'SET_TYPE_POKE';
const SET_SUBTYPE_POKE = 'SET_SUBTYPE_POKE';

let initialState = {
    typepoke: [],
    subtypepoke: [],
};

const navbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TYPE_POKE: {
            return { ...state, typepoke: action.typepoke }
        }
        case SET_SUBTYPE_POKE: {
            return { ...state, subtypepoke: action.subtypepoke }
        }
        default:
            return state;
    }
}

export const setTypeAC = (typepoke) => ({ type: SET_TYPE_POKE, typepoke });
export const setSubTypeAC = (subtypepoke) => ({ type: SET_SUBTYPE_POKE, subtypepoke });

export default navbarReducer;