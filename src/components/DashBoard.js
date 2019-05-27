import React from 'react';
import { connect } from 'react-redux';
import history from '../history';
import UserComponent from './UserComponent';
import { clearCurrentUser as clearCurrentUserAction} from '../actions/users';


const Dashboard = (props) => {
    const { currentUser, clearCurrentUser, children } = props;

    const logout = () => {
        clearCurrentUser();
    };
    
    return(
        <div className="dashboard">
        { Object.keys(currentUser)[0] !== undefined &&
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
        currentUser: state.currentUser
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearCurrentUser: () => dispatch(clearCurrentUserAction())
    }
};

export default connect(mapStateTopProps, mapDispatchToProps)(Dashboard);
