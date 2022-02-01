const IS_AUTH = 'IS_AUTH';

let initialState = {
    isAuth: '',
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_AUTH: {
            return { ...state, isAuth: action.isAuth }
        }
        default:
            return state;
    }
}

export const setIsAuthAC = (isAuth) => ({type: IS_AUTH, isAuth})

export default authReducer;