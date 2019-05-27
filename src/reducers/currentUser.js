import {SET_CURRENT_USER} from '../actions/users'
import {CLEAR_CURRENT_USER} from '../actions/users'

export default function currentUser (state = {}, action) {
    switch (action.type) {
        case SET_CURRENT_USER :
            return action.currentUser;
        case CLEAR_CURRENT_USER :
            return {};
        default :
            return state;
    }
}
