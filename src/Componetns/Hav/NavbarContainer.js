import * as React from 'react';
import * as axios from "axios"
import { connect } from "react-redux";
import { setTypeAC, setSubTypeAC } from '../../redux/navbar-reducer';
import Navbar from './Navbar';

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

let NavbarContainer = (props) => {
    if (props.typepoke.length === 0) {
        axios.get("https://api.pokemontcg.io/v2/types").then(type => {
            props.setTypePoke(type.data.data)
        });
    }
    if (props.subtypepoke.length === 0) {
        axios.get("https://api.pokemontcg.io/v2/subtypes").then(subtype => {
            props.setSubtype(subtype.data.data)
        });
    }
    return <>
        <Navbar typepoke={props.typepoke}
            subtypepoke={props.subtypepoke} />
    </>
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
