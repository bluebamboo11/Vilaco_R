import {SET_USER, SET_USER_DATA} from "./actions";

const initialState = {
    user: null,
    userData: {
        name: '',
        phone: '',
        address: '',
        gender: 'nam',
        code: '',
        hobby: '',
        forte: '',
        weakness: '',
        birthday: ''
    }
};

export function todoApp(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return {...state, user: action.user};
        case SET_USER_DATA:
            return {...state, userData: action.data};
        default:
            return state
    }
}
