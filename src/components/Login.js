import React, { useEffect } from 'react';
import { setCurrentUser as setCurrentUserAction } from '../actions/users';
import { connect } from 'react-redux';
import history from '../history';

const Login = (props) => {
    const { setCurrentUser, users } = props;
    useEffect(() => {
        console.log('Users:', users)
    },[users]);
    return (
        <>
            <div onClick={() => setCurrentUser({theboy:"theboy"})}>login</div>
            <div onClick={() => history.push('/test')}>test</div>
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
