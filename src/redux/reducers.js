import {SET_USER, SET_USER_DATA,ADD_LISR_USER} from "./actions";

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
        birthday: '',
        district: '',
        city: '',
        skype:'',
        town:''
    },
    listUser:[]
};

export function todoApp(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return {...state, user: action.user};
        case SET_USER_DATA:
            return {...state, userData: action.data};
        case ADD_LISR_USER:
            let listUser = state.listUser.concat(action.data);
            return {...state, listUser:listUser };
        default:
            return state
    }
}
