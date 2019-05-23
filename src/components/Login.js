import React from 'react';
import { setCurrentUser as setCurrentUserAction } from '../actions/users';
import { connect } from 'react-redux';
import UserComponent from './UserComponent';
import history from '../history';

const Login = (props) => {
    const { setCurrentUser, users } = props;
    return (
        <div className="login-page">
            {Object.keys(users).map(key => {
                const user = users[key];
                return (
                <UserComponent
                    key={user.id}
                    {...user}/>);
            })}
        </div>
    );
};

const mapStateTopProps = (state) => {
    return {
        users: state.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentUser: (user) => dispatch(setCurrentUserAction(user))
    };
};

export default connect(mapStateTopProps, mapDispatchToProps)(Login);
