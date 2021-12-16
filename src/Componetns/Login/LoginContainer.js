import React from 'react';
import { connect } from "react-redux";
import { setIsAuthAC } from '../../redux/auth-reducer';
import Login from './Login';

let mapStateToProps = (state) => {
    return {
        isAuth: state.isAuth.isAuth,
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
    return (<div>
        <div>
            <Login
                isAuth={props.isAuth}
                setIsAuth={props.setIsAuth} />
        </div>
    </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);