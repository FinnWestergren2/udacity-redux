import {SET_CURRENT_USER} from '../actions/users'

export default function currentUser (state = {}, action) {
    switch (action.type) {
        case SET_CURRENT_USER :
            return {
                ...state,
                ...action.currentUser
            }
        default :
            return state;
    }
}

