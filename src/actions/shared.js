import {_getQuestions, _getUsers} from '../_DATA';
import {receiveQuestions} from './questions';
import {receiveUsers} from './users';

export function recieveAll() {
    return (dispatch) => {
        return (async () => {
            const users = await _getUsers();
            const questions = await _getQuestions();
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
        })
    }
}