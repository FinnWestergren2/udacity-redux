import {SET_CURRENT_USER, CLEAR_CURRENT_USER} from '../actions/currentUser'

export default function currentUser (state = null, action) {
    switch (action.type) {
        case SET_CURRENT_USER :
            return action.userId;
        case CLEAR_CURRENT_USER :
            return null;
        default :
            return state;
    }
}
