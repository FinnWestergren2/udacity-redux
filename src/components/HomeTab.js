import React, { useState } from 'react';
import {connect} from 'react-redux';
import QuestionPreview from './QuestionPreview';

const HomeTab = (props) => {
    const { questions, currentUser } = props;
    const [toggleDisplayCompleted, setToggleDisplayCompleted] = useState(false);

    const displayCompleted = () => {
        return(
            <ul>
            {Object.keys(questions).filter(q => currentUser.answers.hasOwnProperty(q)).map(q =>
                <QuestionPreview key={q} {...questions[q]}/>
            )}
            </ul>
        );
    };

    const displayAll = () => {
        return(
            <ul>
            {Object.keys(questions).map(q =>
                <QuestionPreview key={q} {...questions[q]}/>
            )}
            </ul>
        );
    }

    return (
    <div className="home-tab">
        <div className="page-header">Home</div>
        <span className="tabs">
            <button 
                disabled={!toggleDisplayCompleted}
                onClick={() => setToggleDisplayCompleted(false)}>Show all</button>
            <button 
                disabled={toggleDisplayCompleted}
                onClick={() => setToggleDisplayCompleted(true)}>Show Completed</button>
        </span>
        {toggleDisplayCompleted 
            ? displayCompleted()
            : displayAll()}
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
