import * as React from 'react';
import pokelogo from '../../assets/images/pokelogo.png'
import { NavLink } from 'react-router-dom';
import { setIsAuthAC } from '../../redux/auth-reducer';
import './Header.css';
import { connect } from "react-redux";
import HeaderLogin from '../Login/HeaderLogin';

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
const Header = (props) => {
    return (
        <div>
            <div className='back'>
                <div className='logo'>
                    <NavLink to={'/home'}><img src={pokelogo} /></NavLink>
                </div>
                <div className='header-text'>
                    <NavLink to={'/home'}>
                        <h1>
                            Ultra Super Pokemon 5G Pro
                        </h1>
                    </NavLink>
                </div>
                <div className='login-block'>
                    <HeaderLogin isAuth={props.isAuth}
                        setIsAuth={props.setIsAuth} />
                </div>
            </div>
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);