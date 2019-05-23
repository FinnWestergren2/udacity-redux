import React from 'react';
import { setCurrentUser as setCurrentUserAction } from '../actions/users';
import { connect } from 'react-redux';
import UserComponent from './UserComponent';
import history from '../history';
import UserComponent from './UserComponent';

const Login = (props) => {
    const { setCurrentUser, users } = props;

    const handleSelect = (user) => {
        setCurrentUser(user);
        history.push('/dashboard');
    }

    return (
        <div className="login">
            {Object.keys(users).map(key => {
                const user = users[key];
                return (<UserComponent 
                    {...user}
                    key={key}
                    onSelect={() => handleSelect(user)}/>);
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
