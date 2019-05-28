import {RECEIVE_USERS} from '../actions/users';
import {ADD_ANSWER} from '../actions/shared';
import {ADD_QUESTION} from '../actions/questions';

export default function users (state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS :
            return action.users;
        case ADD_ANSWER :
            const {authedUser, qid, answer} = action.answerObj;
            const user = state[authedUser];
            return {
                ...state,
                [authedUser]:{...user, answers: {...user.answers, [qid]: answer}}
            }
        case ADD_QUESTION :
            return {
                ...state, [action.question.author]: {
                    ...state[action.question.author], questions: [
                        ...state[action.question.author].questions, action.question.id
                    ]
                }
            };
        default :
            return state;
    }
}
