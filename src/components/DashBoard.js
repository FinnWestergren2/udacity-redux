import React from 'react';
import { connect } from 'react-redux';
import history from '../history';
import UserComponent from './UserComponent';
import { setCurrentUser as setCurrentUserAction, clearCurrentUser } from '../actions/users';


const Dashboard = (props) => {
    const { currentUser, setCurrentUser, children } = props;

    const logout = () => {
        setCurrentUser(null);
    };
    
    return(
        <div className="dashboard">
            <span className="tabs">
                <button onClick={() => history.push('/home')}>Home</button>
                <button onClick={() => history.push('/add')}>NewQuestion</button>
                <button onClick={() => history.push('/leaderboard')}>Leaderboard</button>
            </span>
            <span className="current-user">
                <UserComponent {...currentUser}/>
                <button  onClick={logout}>logout</button>
            </span>
            <div className="tab-container">
                {children}
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
