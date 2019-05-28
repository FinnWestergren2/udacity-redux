import React, { useState } from 'react';
import { connect } from 'react-redux';
import UserComponent from './UserComponent';

const LeaderboardTab = (props) => {
    const {users} = props;
    const [orderByAnswers, setOrderByAnswers] = useState(false);

    const leaders = () => {
        return Object.keys(users).sort((a, b) => {
            let aVal = 0, bVal = 0;
            if ( orderByAnswers ) {
                aVal = Object.keys(users[a].answers).length;
                bVal = Object.keys(users[b].answers).length;
            }
            else {
                aVal = Object.keys(users[a].questions).length;
                bVal = Object.keys(users[b].questions).length;
            }
            return bVal-aVal;
        });
    }

    return (
        <div className="leaderboard-tab">
            <div className="page-header">Leaderboard</div>
            {leaders().map((key, index) => {
                return <div 
                    className="leaderboard-user-panel"
                    key={key}>
                    <label>{index+1} <UserComponent {...users[key]}/></label>
                    <div className="user-stats">
                        Questions: {Object.keys(users[key].questions).length} <br/>
                        Answers: {Object.keys(users[key].answers).length}
                    </div>
                </div>
            })}
        </div>
    );
};

const mapStateTopProps = (state) => {
    return { users: state.users };
}

export default connect(mapStateTopProps)(LeaderboardTab);
