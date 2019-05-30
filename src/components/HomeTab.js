import React, { useState } from 'react';
import { connect } from 'react-redux';
import QuestionPreview from './QuestionPreview';

const HomeTab = (props) => {
    const { questions, users, currentUserId } = props;
    const currentUser = users[currentUserId]
    const [displayState, setDisplayState] = useState('incomplete');

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
        if(questionsToDisplay().length === 0) return <h2>You've answered all available polls!</h2>
        return questionsToDisplay().sort((a, b) => questions[b].timestamp - questions[a].timestamp ).map(q => <QuestionPreview key={q} {...questions[q]}/>);
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
