import * as React from 'react';
import './Content.css';
import PokeCardContainer from './Card/PokeCardContainer';

const Content = () => {
    return (<div>
        <div className="content">
            <PokeCardContainer />
        </div>
    </div>

    )
}
export default Content;