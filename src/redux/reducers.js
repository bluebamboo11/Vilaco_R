import {
    SET_USER,
    SET_USER_DATA,
    ADD_LIST_USER,
    SELECT_CLASS,
    SELECT_STUDENT,
    SELECT_CONTRACT,
    SELECT_EMPLOYEE,
    ADD_LIST_CLASS,
    ADD_LIST_EMPLOYEE,
    ADD_LIST_CONTRACT,
    IS_LOADING,
    IS_LOAD_SELECT, ADD_LIST_TEACHER
} from "./actions";

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
        skype: '',
        town: '',
        phoneFamily:'',
        blood:'',
        facebook:'',
        startDay:'',
    },
    listUser: [],
    loadAll: false,
    student: null,

};

export function todoApp(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return {...state, user: action.user};
        case SET_USER_DATA:
            return {...state, userData: action.data};
        case ADD_LIST_USER:
            let listUser = action.data;
            return {...state, listUser: listUser};
        case SELECT_STUDENT:
            return {...state, student: action.data};
        case SELECT_CLASS:
            return {...state, classSelected: action.data};
        case SELECT_CONTRACT:
            return {...state, contractSelected: action.data};
        case ADD_LIST_EMPLOYEE:
            return {...state, listEmployee: action.data};
        case ADD_LIST_CLASS:
            return {...state, listClass: action.data};
        case ADD_LIST_CONTRACT:
            return {...state, listContract: action.data};
        case SELECT_EMPLOYEE:
            return {...state, employeeSelected: action.data};
        case IS_LOADING:
            return {...state, loadAll: action.data};
        case IS_LOAD_SELECT:
            return {...state, loadSelect: action.data};
        case ADD_LIST_TEACHER:
            return {...state, listTeacher: action.data};
        default:
            return state
    }
}


