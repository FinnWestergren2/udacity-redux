import React, { useState } from 'react';
import { connect } from 'react-redux';
import history from '../history';
import UserComponent from './UserComponent';
import NewQuestionTab from './NewQuestionTab';
import LeaderboardTab from './LeaderboardTab';
import HomeTab from './HomeTab';
import ProfileTab from './ProfileTab';
import { setCurrentUser as setCurrentUserAction } from '../actions/users';


const Dashboard = (props) => {
    const { currentUser, setCurrentUser } = props;
    const [displayState, setDisplayState] = useState("Home");

    const logout = () => {
        setCurrentUser({});
        history.push('/');
    };

    const renderCurrentTab = () => {
        switch (displayState) {
            case "Home":
                return <HomeTab/>;
            case "NewQuestion":
                return <NewQuestionTab/>;
            case "Leaderboard":
                return <LeaderboardTab/>;
            case "Profile":
                return <ProfileTab/>;
            default:
                return;
        }
    };
    
    return(
        <div className="dashboard">
            <span className="tabs">
                <button  onClick={() => setDisplayState("Home")}>Home</button>
                <button  onClick={() => setDisplayState("NewQuestion")}>NewQuestion</button>
                <button  onClick={() => setDisplayState("Leaderboard")}>Leaderboard</button>
                <button  onClick={() => setDisplayState("Profile")}>Profile</button>
            </span>
            <span className="current-user">
                <UserComponent {...currentUser}/>
                <button  onClick={logout}>logout</button>
            </span>
            <div className="tab-container">
                {renderCurrentTab()}
            </div>
        </div>
    );
};

const mapStateTopProps = (state) => {
    return {
        currentUser: state.currentUser
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentUser: (user) => dispatch(setCurrentUserAction(user))
    }
};

export default connect(mapStateTopProps, mapDispatchToProps)(Dashboard);
