import React from 'react';
import { connect } from "react-redux";
import { setTypeAC, setSubTypeAC } from '../../redux/navbar-reducer';
import Navbar from './Navbar';

let NavbarContainer = (props) => {
    return <>
    <Navbar setTypePoke={props.setTypePoke} 
            setSubtype={props.setSubtype}/>
    </>
}

let mapStateToProps = (state) => {
    return {
        typepoke: state.navbarPage.typepoke,
        subtypepoke: state.navbarPage.subtypepoke,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setTypePoke: (typepoke) => {
            dispatch(setTypeAC(typepoke));
        },
        setSubtype: (subtypepoke) => {
            dispatch(setSubTypeAC(subtypepoke));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
