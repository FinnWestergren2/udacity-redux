import React from 'react';
import UserComponent from './UserComponent';
import history from '../history';

const QuestionPreview = (props) => {
    const { author, optionOne, optionTwo, id } = props;
    return (
        <div>
            <UserComponent id={author} smallIcon={true}/>
            <div className="options">{optionOne.text}<br/>OR<br/>{optionTwo.text}</div>
            <button onClick={() => history.push(`/questions/${id}`)}>view poll</button>
        </div>
    );
}

export default QuestionPreview;