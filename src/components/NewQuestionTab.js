import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { _saveQuestion } from '../_DATA';
import { addQuestion } from '../actions/questions'
import history from '../history';

const NewQuestionTab = (props) => {
    const { currentUserId, addQuestion, users } = props;
    const currentUser = users[currentUserId];
    const [disableSubmit, setDisableSubmit] = useState(true);
    const optionOne = useRef(null);
    const optionTwo = useRef(null);
    const handleChange = () => setDisableSubmit(optionOne.current.value === '' || optionTwo.current.value === '');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        _saveQuestion({
            author: currentUser.id,
            optionOneText: optionOne.current.value,
            optionTwoText: optionTwo.current.value
        }).then(data => {
            addQuestion(data);
            history.push(`/home`);
        });
    };

    return (
        <div className="new-question-tab">
            <h2 className = "page-header"> Add a new question </h2>
            <form 
                className="new-question-form"
                onSubmit={(e) => handleSubmit(e)}>
                <div>Would you rather...</div>
                <input 
                    ref={optionOne}
                    onChange={handleChange}
                    placeholder="enter first option"/>
                <input
                    ref={optionTwo}
                    onChange={handleChange}
                    placeholder="enter second option"/>
                <button
                    type="submit"
                    disabled={disableSubmit}>Submit</button>
            </form>
        </div>
    );
};

const mapStateTopProps = (state) => {
    return { 
        currentUserId: state.currentUser, 
        users: state.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addQuestion: (question) => dispatch(addQuestion(question))
    }
};

export default connect(mapStateTopProps, mapDispatchToProps)(NewQuestionTab);
