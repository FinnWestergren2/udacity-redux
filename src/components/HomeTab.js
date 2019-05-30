import React, { useState } from 'react';
import { connect } from 'react-redux';
import QuestionPreview from './QuestionPreview';

const HomeTab = (props) => {
    const { questions, users, currentUserId } = props;
    const currentUser = users[currentUserId]
    const [displayState, setDisplayState] = useState('all');

    const questionsToDisplay = () => {
        const questionsToDisplay = () => {
            switch(displayState) {
                case 'complete':
                    return Object.keys(questions).filter(q => currentUser.answers.hasOwnProperty(q))
                case 'incomplete':
                    return Object.keys(questions).filter(q => !currentUser.answers.hasOwnProperty(q))
                case 'all':
                default:
                    return Object.keys(questions)
            }
        };
        return questionsToDisplay().map(q => <QuestionPreview key={q} {...questions[q]}/>);
    };

    return (
    <div className="home-tab">
        <h2 className="page-header">Home</h2>
        <span className="tabs">
            <button 
                disabled={displayState === 'all'}
                onClick={() => setDisplayState('all')}>Show all</button>
            <button 
                disabled={displayState === 'complete'}
                onClick={() => setDisplayState('complete')}>Show Completed</button>
            <button 
                disabled={displayState === 'incomplete'}
                onClick={() => setDisplayState('incomplete')}>Show Incomplete</button>
        </span>
        <div className="page-meat">{questionsToDisplay()}</div>
    </div>
    );
};

const mapStateToProps = (state) => {
    return {
        users: state.users,
        questions: state.questions,
        currentUserId: state.currentUser
    };
};

export default connect(mapStateToProps)(HomeTab);
