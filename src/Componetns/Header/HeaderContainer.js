import React, { Component } from 'react'
import Header from './Header'
import { connect } from 'react-redux';
import { setIsAuthAC } from "../../redux/auth-reducer";

// контейнет со всеми типами и подтипами покемонов\
// передача нужных компонентов
class HeaderContainer extends Component {
    render() {
        return (
            <>
                <Header setIsAuth={this.props.setIsAuth}
                    isAuth={this.props.isAuth}
                    isUs={this.props.isUs} />
            </>
        )
    }
}

// получение данных из state
let mapStateToProps = (state) => {
    return {
        isAuth: state.isAuth.isAuth,
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
