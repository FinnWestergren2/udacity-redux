import React from 'react';
import { connect } from 'react-redux';
import history from '../history';
import UserComponent from './UserComponent';
import { clearCurrentUser as clearCurrentUserAction} from '../actions/currentUser';


const Dashboard = (props) => {
    const { currentUserId, users, clearCurrentUser, children } = props;
    const currentUser = users[currentUserId];

    const logout = () => {
        clearCurrentUser();
    };
    
    return(
        <div className="dashboard">
            <span className="dashboard-header">
            <h1 className="app-title">Would You Rather?</h1>
            { currentUserId !== null &&
            <>
                <span className="tabs">
                    <button onClick={() => history.push('/home')}>Home</button>
                    <button onClick={() => history.push('/add')}>New Question</button>
                    <button onClick={() => history.push('/leaderboard')}>Leaderboard</button> 
                </span>
                <UserComponent id={currentUser.id} smallIcon={true}>
                    <button className="logout-button" onClick={logout}>logout</button>
                </UserComponent>
            </>
            }
            </span>
            <div className="page-container">
                {children}
            </div>
        </div>
    );
};

const mapStateTopProps = (state) => {
    return {
        users: state.users,
        currentUserId: state.currentUser
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearCurrentUser: () => dispatch(clearCurrentUserAction())
    };
};

export default connect(mapStateTopProps, mapDispatchToProps)(Dashboard);
