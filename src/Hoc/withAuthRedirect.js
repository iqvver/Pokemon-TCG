import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

// получение данных из state
let mapStateToPropsForRedirect = (state) => ({isAuth: state.isAuth});

// редирект при отсутствии авторизации
export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if ((localStorage.getItem('isAuth') == 'false') || (localStorage.getItem('isAuth') == '{"isAuth":""}')) 
                return <Redirect to={'/login'} />
                return <Component {...this.props} />
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}