import {RECEIVE_QUESTIONS, ADD_QUESTION} from '../actions/questions'
import {ADD_ANSWER} from '../actions/shared'

export default function questions (state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS :
            return action.questions;
        case ADD_QUESTION :
            return {
                ...state,
                [action.question.id]: action.question
            };
        case ADD_ANSWER :
            const { authedUser, qid, answer } = action.answerObj;
            return {
                ...state,
                [qid]: {...state[qid], 
                    [answer]: {...state[qid][answer], 
                        votes: [...state[qid][answer].votes, authedUser]}}
            };
        default :
            return state;
    }
};
