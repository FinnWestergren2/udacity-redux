import React from 'react';
import { setCurrentUser as setCurrentUserAction } from '../actions/users';
import { connect } from 'react-redux';
import UserComponent from './UserComponent';
import history from '../history';

const Login = (props) => {
    const { setCurrentUser, users } = props;

    const handleSelect = (user) => {
        setCurrentUser(user);
        if(window.location.pathname === '/'){
            history.push('/home')
        }
    }

    return (
        <div className="login">
            <div className="page-header">Select a User</div>
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
        users: state.users,
        questions: state.questions
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentUser: (user) => dispatch(setCurrentUserAction(user))
    };
};

export default connect(mapStateTopProps, mapDispatchToProps)(Login);
