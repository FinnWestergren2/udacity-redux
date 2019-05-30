import React from 'react';
import { connect } from 'react-redux';
import UserComponent from './UserComponent';

const LeaderboardTab = (props) => {
    const {users} = props;

    const answers = (key) => Object.keys(users[key].answers).length;
    const questions = (key) => Object.keys(users[key].questions).length;

    const leaders = () => {
        return Object.keys(users).sort((a, b) => {
            const aVal = answers(a) + questions(a);
            const bVal = answers(b) + questions(b);
            return bVal-aVal;
        });
    }

    return (
        <div className="leaderboard-tab">
            <h2 className="page-header">Leaderboard</h2>
            <div>
                {leaders().map((key, index) => {
                    return <div
                        className="leaderboard-user-panel"
                        key={key}>
                        <UserComponent {...users[key]} smallIcon={true}/>
                        <span className="user-stats">
                                Asked: {answers(key)} <br/>
                                Answered: {questions(key)} <br/>
                                Total: {questions(key) + answers(key)}
                            </span>
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
