export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const CLEAR_CURRENT_USER = 'CLEAR_CURRENT_USER';

export function setCurrentUser(userId){
    return {
        type: SET_CURRENT_USER,
        userId
    };
}

export function clearCurrentUser(){
    return {
        type: CLEAR_CURRENT_USER
    };
}

