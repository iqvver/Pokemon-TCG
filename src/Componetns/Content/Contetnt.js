import * as React from 'react';
import './Content.css';
import PokeCardContainer from './Card/PokeCardContainer';

const Content = () => {
    return (
        <div className="content">
            <PokeCardContainer />
        </div>
    )
}
export default Content;