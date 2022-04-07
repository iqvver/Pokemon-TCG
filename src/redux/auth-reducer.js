const IS_AUTH = 'IS_AUTH'; // переменная входа/выхода из приложения
const ADD_USER = 'ADD_USER'; // переменная нового пользователя (регистрация)
const IS_USER = 'IS_USER'; // пользователь

// иноциализация переменных
let initialState = {
    isAuth: '', // авторизация true/false
    // массив пользователей
    loginAndPassword: [
        { id: 0, username: 'iqvver', login: 'iqvver@gmail.com', password: 1234 },
        { id: 1, username: 'smart', login: 'smart@gamil.com', password: 1488 },
    ],
    // пользователь
    isUser: 'onLine',

};
// редьюсер авторизаци/регистрации
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_AUTH: {
            // вход в приложениеб переключение true/false
            return { ...state, isAuth: action.isAuth }
        }
        case IS_USER: {
            // пользователь за которого выполнен вход
            return { ...state, isUser
        : action.isUser
     }
        }
        case ADD_USER: {
            // добавление в массив нового пользователя
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

// экшен для входа/выхода
export const setIsAuthAC = (isAuth) => ({ type: IS_AUTH, isAuth })
// экшен для пользователя
export const setIsUseAC = (isUser) => ({ type: IS_USER, isUser})
// экшен для добавления нового пльзователя
export const newUserAC = (newUserName, newUserLogin, newUserPass) => ({ type: ADD_USER, newUserName, newUserLogin, newUserPass })

export default authReducer;