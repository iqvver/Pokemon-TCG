import React, { Component } from 'react'
import Header from './Header'
import { connect } from 'react-redux';
import { setIsAuthAC } from "../../redux/auth-reducer";

class HeaderContainer extends Component {
    render() {
        return <Header {...this.props} />
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
