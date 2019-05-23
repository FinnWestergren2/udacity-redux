import React from 'react';

const UserComponent = (props) => {
    const { avatarURL, name, onSelect } = props;

    return (
        <div 
            className="UserComponent"
            onClick={onSelect}>
            {name}
        </div>
    );
};

export default UserComponent;
