import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import { connect } from 'react-redux';
import HomeTab from './HomeTab';
import NewQuestionTab from './NewQuestionTab';
import LeaderboardTab from './LeaderboardTab';
import QuestionPage from './QuestionPage';


const Routes = (props) => {
    const { currentUser } = props;
    return (
        <Switch>
            <Route
                component={Login}
                exact={currentUser !== null} // forces you to log in if entering from rando entry point
                path='/'/>
            <Route
                component={HomeTab}
                path='/home'/>
            <Route
                component={NewQuestionTab}
                path='/add'/>
            <Route
                component={LeaderboardTab}
                path='/leaderboard'/>
            <Route
                component={QuestionPage}
                exact={false}
                path='/questions/:id'/>
        </Switch>
    )
};

const mapStateToProps = (state) => {
    return { 
        currentUser: state.currentUser
    }
};

export default connect(mapStateToProps)(Routes);
