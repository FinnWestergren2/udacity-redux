import React, { useRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import UserComponent from './UserComponent';
import { addAnswer as addAnswerAction} from '../actions/shared';
import { _saveQuestionAnswer } from '../_DATA';


const QuestionPage = (props) => {
    const { match, questions, users, currentUserId, addAnswer } = props;
    const currentUser = users[currentUserId];
    const { author, optionOne, optionTwo, id } = questions[match.params.id];
    const [completed, setCompleted] = useState();
    let selection = useRef(null);

    useEffect(() => setCompleted(currentUser.answers.hasOwnProperty(id)), [currentUser.answers, id, completed])


    const handleSubmit = (e) => {
        e.preventDefault();
        if(selection.option.value === '') return;
        const answerObj = { authedUser: currentUser.id, qid: id, answer: selection.option.value};
        addAnswer(answerObj).then(() => {
            setCompleted(true);
        });
    };

    const poll = () => {
        return (
            <div className="poll-option">
                <form 
                    ref={s => selection = s}
                    onSubmit={e => handleSubmit(e)}>
                    <div>Would you rather...
                        <br/>
                        <label>{optionOne.text}<input type="radio" value="optionOne" name="option"/></label>
                        <br/>OR<br/>
                        <label>{optionTwo.text}<input type="radio" value="optionTwo" name="option"/></label>
                        <br/>
                        <input type="submit"/>
                    </div>
                </form>
            </div>
        );
    };

    const results = () => {
        const optOneVotes = optionOne.votes.length;
        const optTwoVotes = optionTwo.votes.length;
        const totalVotes = optOneVotes + optTwoVotes;
        const percentString = (numerator) => `${Math.floor(numerator/totalVotes*100)}%`;

        return (
            <div className="poll-results">
                <label>{`Option One: ${optionOne.text}: `}<span>{optOneVotes} ({percentString(optOneVotes)})</span></label>
                <br/>
                <label>{`Option Two: ${optionTwo.text}: `}<span>{optTwoVotes} ({percentString(optTwoVotes)})</span></label>
            </div>
        );
    };

    return (
        <div className="question-details">
            {<UserComponent id={author}/>}
            {completed ? results() : poll()}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        questions: state.questions,
        users: state.users,
        currentUserId: state.currentUser
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addAnswer: (answerObj) => _saveQuestionAnswer(answerObj).then(() => dispatch(addAnswerAction(answerObj)))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage);
