import React, { useRef } from 'react';
import { connect } from 'react-redux';
import UserComponent from './UserComponent';
import { addAnswer as addAnswerAction} from '../actions/users';
import { _saveQuestionAnswer } from '../_DATA';


const QuestionPage = (props) => {
    const { match, questions, currentUser, addAnswer } = props;
    const { author, optionOne, optionTwo, id } = questions[match.params.id];
    let selection = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(selection.option.value === '') return;
        const answerObj = { authedUser: currentUser.id, qid: id, answer: selection.option.value};
        _saveQuestionAnswer(answerObj).then(() => addAnswer(answerObj));
    };

    const poll = () => {
        return (
            <div className="options">
                <div className="poll-option">
                    <form 
                        ref={s => selection = s}
                        onSubmit={e => handleSubmit(e)}>
                        <label>{optionOne.text}<input type="radio" value="optionOne" name="option"/></label>
                        <label>{optionTwo.text}<input type="radio" value="optionTwo" name="option"/></label>
                        <input type="submit"/>
                    </form>
                </div>
            </div>
        );
    };

    const results = () => {
    };

    return (
        <div className="question-details">
            {/*<UserComponent id={author}/>*/}
            {currentUser.answers.hasOwnProperty(id) ? poll() : results()}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        questions: state.questions,
        currentUser: state.currentUser
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addAnswer: () => dispatch(addAnswerAction)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage);
