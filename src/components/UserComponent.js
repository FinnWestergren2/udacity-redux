import React from 'react';
import {connect} from 'react-redux';

const UserComponent = (props) => {
    const { id, users, onSelect, smallIcon, children } = props;
    const { avatarURL, name } = users[id];

    return (
        <span 
            className="user-component"
            onClick={onSelect}>
            <img 
                src={avatarURL}
                alt=""
                className={`icon-${smallIcon ? 'small':'large'}`}/>
            <span>{name}</span>
            {children}
        </span>
    );
};

const mapStateToProps = (state) => {
    return { users: state.users };
}

export default connect(mapStateToProps)(UserComponent);
