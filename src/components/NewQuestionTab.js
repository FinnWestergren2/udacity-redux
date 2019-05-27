import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { _saveQuestion } from '../_DATA';
import { addQuestion } from '../actions/questions'

const NewQuestionTab = (props) => {
    const { currentUser, addQuestion } = props;
    const optionOne = useRef(null);
    const optionTwo = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        _saveQuestion({
            author: currentUser.id,
            optionOneText: optionOne.current.value,
            optionTwoText: optionTwo.current.value
        }).then(data => addQuestion(data));
    };

    return (
        <div className="new-question-tab">
            <div className = "page-header">
                Add a new question
            </div>
            <form 
                className="new-question-form"
                onSubmit={(e) => handleSubmit(e)}>
                <div>Would you rather...</div>
                <input 
                    ref={optionOne}
                    placeholder="enter first option"/>
                <input
                    ref={optionTwo}
                    placeholder="enter second option"/>
                <button
                    type="submit">Submit</button>
            </form>
        </div>
    );
};

const mapStateTopProps = (state) => {
    return { currentUser: state.currentUser }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addQuestion: (question) => dispatch(addQuestion(question))
    }
};

export default connect(mapStateTopProps, mapDispatchToProps)(NewQuestionTab);
