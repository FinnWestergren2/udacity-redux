import React, { useState, useEffect } from 'react';


const UserComponent = (props) => {
    const { id, name, avatarURL } = props;
    const [hover, setHover] = useState(false);

    return (
        <span className="user-component">
            <img src={avatarURL}/>
            <div/>
        </span>
    );
};

export default UserComponent;