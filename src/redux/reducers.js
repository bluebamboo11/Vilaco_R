import {SET_USER} from "./actions";

const initialState = {user: null};

export function todoApp(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return {...state, user: action.user};
        default:
            return state
    }
}
