import React from 'react';
import { connect } from "react-redux";
import { setIsAuthAC } from '../../../redux/auth-reducer';
import Login from './Login';

// получение данных из state
let mapStateToProps = (state) => {
    return {
        isAuth: state.isAuth.isAuth,
        isReg: state.isAuth.loginAndPassword,
        isUs: state.isAuth.isUs
    }
}
// отправка данных в state
let mapDispatchToProps = (dispatch) => {
    return {
        setIsAuth: (isAuth) => {
            dispatch(setIsAuthAC(isAuth));
        }
    }
}
// контейнер со страницей входа в приложение
// передача нужных переменных
const LoginContainer = (props) => {
    return (
        <div>
            <Login
                isAuth={props.isAuth}
                setIsAuth={props.setIsAuth}
                isReg={props.isReg}
                isUs={props.isUs} />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);