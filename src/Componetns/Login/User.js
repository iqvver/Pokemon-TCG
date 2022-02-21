import React from 'react';

const User = (props) => {
    return (
        <div>
            <div>
                {props.name}
            </div>
            <div>
                {props.login}
            </div>
            <div>
                {props.password}
            </div>
        </div>
    )
}

export default User;