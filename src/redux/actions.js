export const SET_USER = 'SET_USER';
export const SET_USER_DATA = 'SET_USER_DATA';

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

