import * as React from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import './Content.css';
import PokeCardContainer from './Card/PokeCardContainer';
import Login from '../Login/Login';

const Content = () => {
    return (
        <div className="content">
            <PokeCardContainer />
            <div>
                <Route path='/login' render={() => { return <Login /> }} />
            </div>
        </div>
    )
}
export default Content;