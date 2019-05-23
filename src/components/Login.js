import React from 'react';
import { setCurrentUser as setCurrentUserAction } from '../actions/users';
import { connect } from 'react-redux';
import history from '../history';
import UserComponent from './UserComponent';

const Login = (props) => {
    const { setCurrentUser, users } = props;

    const handleSelect = (user) => {
        setCurrentUser(user);
        history.push('/dashboard');
    }

    return (
        <>
            {Object.keys(users).map(key => {
                const user = users[key];
                return <UserComponent 
                    {...user}
                    key={key}
                    onSelect={() => handleSelect(user)}/>
            })}
        </>
    );
};

const mapStateTopProps = (state) => {
    return {
        users: state.users
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentUser: (user) => dispatch(setCurrentUserAction(user))
    }
};

export default connect(mapStateTopProps, mapDispatchToProps)(Login);
