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
            console.log(users[a], aVal, users[b], bVal)
            return bVal-aVal;
        });
    }

    return (
        <div className="leaderboard-tab">
            <h2 className="page-header">Leaderboard</h2>
            <span className="order-buttons">
                <button 
                    disabled={orderByAnswers}
                    onClick={() => setOrderByAnswers(true)}>Sort By Answered</button>
                <button 
                    disabled={!orderByAnswers}
                    onClick={() => setOrderByAnswers(false)}>Sort By Asked</button>
            </span>
            <div className="page-meat">
                {leaders().map((key, index) => {
                    return <div
                        className="leaderboard-user-panel"
                        key={key}>
                        <UserComponent {...users[key]} smallIcon={true}>
                            <div className="user-stats">
                                Asked: {Object.keys(users[key].questions).length} <br/>
                                Answered: {Object.keys(users[key].answers).length}
                            </div>
                        </UserComponent>
                    </div>
                })}
            </div>
        </div>
    );
};

const mapStateTopProps = (state) => {
    return { users: state.users };
}

export default connect(mapStateTopProps)(LeaderboardTab);
