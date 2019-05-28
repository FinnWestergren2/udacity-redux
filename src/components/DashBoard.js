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
        { currentUserId !== null &&
        <>
            <span className="tabs">
                <button onClick={() => history.push('/home')}>Home</button>
                <button onClick={() => history.push('/add')}>NewQuestion</button>
                <button onClick={() => history.push('/leaderboard')}>Leaderboard</button> 
            </span>
            <span className="current-user">
                <UserComponent id={currentUser.id} smallIcon={true}/>
                <button  onClick={logout}>logout</button>
            </span>
        </>
        }
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
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearCurrentUser: () => dispatch(clearCurrentUserAction())
    }
};

export default connect(mapStateTopProps, mapDispatchToProps)(Dashboard);
