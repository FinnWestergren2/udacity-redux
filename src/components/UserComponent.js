import React from 'react';
import {connect} from 'react-redux';

const UserComponent = (props) => {
    const { id, users, onSelect, smallIcon } = props;
    const { avatarURL, name } = users[id];

    return (
        <div 
            className="UserComponent"
            onClick={onSelect}>
            <img 
                src={avatarURL}
                alt=""
                className={`icon-${smallIcon ? 'small':'large'}`}/>
            <span>{name}</span>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { users: state.users };
}

export default connect(mapStateToProps)(UserComponent);
