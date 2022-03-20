import * as React from 'react';
import './DarkMode.css';


const DarkMode = () => {
const body = document.querySelector('body');
const toggle = document.getElementById('toggle');

    return (
        <body>
            <div className="theme-toggle" >
                <input type="checkbox" />
                <div className="toggle-body"></div>
                <div className="celestial-body" ></div>
            </div>
        </body>
    )
}
export default DarkMode;