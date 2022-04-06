import React, { Component } from 'react'
import Header from './Header'
import { connect } from 'react-redux';
import { setIsAuthAC } from "../../redux/auth-reducer";

let mapStateToProps = (state) => {
    return {
        isAuth: state.isAuth.isAuth,
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

class HeaderContainer extends Component {
    render() {
        return <Header setIsAuth={this.props.setIsAuth}
            isAuth={this.props.isAuth}
            isUs={this.props.isUs} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
