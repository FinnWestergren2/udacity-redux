import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import { connect } from 'react-redux';

const Routes = (props) => {
    const { currentUser } = props;
    return (
        <Switch>
            <Route
                component={() => <Login/>}
                exact={Object.keys(currentUser)[0] && true} // forces you to log in if entering from rando entry point
                path='/'/>
            <Route
                component={() => <div>{currentUser}</div>}
                path='/dashboard'/>
        </Switch>
    )
};

const mapStateToProps = (state) => {
    return { 
        currentUser: state.currentUser
    }
};

export default connect(mapStateToProps)(Routes);
