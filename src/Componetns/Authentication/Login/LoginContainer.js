import React from 'react';
import { connect } from "react-redux";
import { setIsAuthAC } from '../../../redux/auth-reducer';
import Login from './Login';

let mapStateToProps = (state) => {
    return {
        isAuth: state.isAuth.isAuth,
        isReg: state.isAuth.loginAndPassword,
        isUs: state.isAuth.isUs
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setIsAuth: (isAuth) => {
            dispatch(setIsAuthAC(isAuth));
        }
    }
}
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