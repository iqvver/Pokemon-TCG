const SET_USER = 'SET_USER';

let initialState = {
    
    isAuth: false,
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER: {
            return { ...state, isAuth: true }
        }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: SET_USER});

export default authReducer;