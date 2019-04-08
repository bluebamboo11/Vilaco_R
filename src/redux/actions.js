export const SET_USER = 'SET_USER';
export const SET_USER_DATA = 'SET_USER_DATA';
export const ADD_LISR_USER = 'ADD_LISR_USER';

export function setUser(user) {
    return {
        type: SET_USER,
        user:user
    }

}
export function setUserData(userData) {
    return {
        type: SET_USER_DATA,
        data:userData
    }

}
export function addListUser(listUser) {
    return {
        type: ADD_LISR_USER,
        data:listUser
    }

}

