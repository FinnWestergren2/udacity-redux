export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER'

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    };
}

export function addUsers(user){
    return {
        type: ADD_USER,
        user
    };
}

export function deleteUser(user){
    return {
        type: DELETE_USER,
        user
    };
}
