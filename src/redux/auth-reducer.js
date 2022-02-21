const IS_AUTH = 'IS_AUTH';
const ADD_USER = 'ADD_USER';

let initialState = {
    isAuth: '',
    loginAndPassword: [
        { id: 0, username: 'iqvver', login: 'iqvver@gamil.com', password: 1234 },
        { id: 1, username: 'smart', login: 'smart@gamil.com', password: 1488 },
    ],

};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_AUTH: {
            return { ...state, isAuth: action.isAuth }
        }
        case ADD_USER: {
            let user = action.newUserName;
            let login = action.newUserLogin;
            let pass = action.newUserPass;

            return {
                ...state,
                loginAndPassword: [...state.loginAndPassword,
                {
                    username: user,
                    login: login,
                    password: pass,
                }]
            };
        }
        default:
            return state;
    }
}

export const setIsAuthAC = (isAuth) => ({ type: IS_AUTH, isAuth })
export const newUserAC = (newUserName, newUserLogin, newUserPass) => ({ type: ADD_USER, newUserName, newUserLogin, newUserPass })

export default authReducer;