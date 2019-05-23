import React from 'react';

const UserComponent = (props) => {
    const { avatarURL, name, onSelect } = props;

    return (
        <div 
            className="UserComponent"
            onClick={onSelect}>
            <img src={avatarURL} alt=""/>
            <span>{name}</span>
        </div>
    );
};

export default UserComponent;
