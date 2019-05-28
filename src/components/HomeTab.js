import React, { useState } from 'react';
import {connect} from 'react-redux';
import QuestionPreview from './QuestionPreview';

const HomeTab = (props) => {
    const { questions, currentUser } = props;
    const [displayState, setDisplayState] = useState('all');

    const questionsToDisplay = () => {
        const questionsToDisplay = () => {
            switch(displayState) {
                case 'all':
                return Object.keys(questions)
                case 'complete':
                return Object.keys(questions).filter(q => currentUser.answers.hasOwnProperty(q))
                case 'incomplete':
                return Object.keys(questions).filter(q => !currentUser.answers.hasOwnProperty(q))
            }
        };
        return questionsToDisplay().map(q => <QuestionPreview key={q} {...questions[q]}/>);
    };

    return (
    <div className="home-tab">
        <div className="page-header">Home</div>
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
        {questionsToDisplay()}
    </div>
    );
};

const mapStateToProps = (state) => {
    return {
        questions: state.questions,
        currentUser: state.currentUser
    };
};

export default connect(mapStateToProps)(HomeTab);
