import {_getQuestions, _getUsers} from '../_DATA';
import {receiveQuestions} from './questions';
import {receiveUsers} from './users';

export function receiveAll() {
    return (dispatch) => {
        _getUsers().then(data => dispatch(receiveUsers(data)));
        _getQuestions().then(data => dispatch(receiveQuestions(data)));
    }
}
