export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER'
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const CLEAR_CURRENT_USER = 'CLEAR_CURRENT_USER';

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function addUsers(user){
    return {
        type: ADD_USER,
        user
    }
}

export function deleteUser(user){
    return {
        type: DELETE_USER,
        user
    }
}

export function setCurrentUser(currentUser){
    return {
        type: SET_CURRENT_USER,
        currentUser
    }
}

export function clearCurrentUser(){
    return {
        type: CLEAR_CURRENT_USER
    }
}
