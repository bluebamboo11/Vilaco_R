export const SET_USER = 'SET_USER';
export const SET_USER_DATA = 'SET_USER_DATA';
export const ADD_LIST_USER = 'ADD_LIST_USER';
export const SELECT_STUDENT = 'SELECT_STUDENT';
export const SELECT_TEACHER = 'SELECT_TEACHER';
export const SELECT_CLASS = 'SELECT_CLASS';
export const SELECT_CONTRACT = 'SELECT_CONTRACT';
export const SELECT_EMPLOYEE = 'SELECT_EMPLOYEE';
export const ADD_LIST_CONTRACT = 'ADD_LIST_CONTRACT';
export const ADD_LIST_CLASS = 'ADD_LIST_CLASS';
export const ADD_LIST_EMPLOYEE = 'ADD_LIST_EMPLOYEE';
export const IS_LOADING = 'IS_LOADING';
export const IS_LOAD_SELECT = 'IS_LOAD_SELECT';
export const ADD_LIST_TEACHER = 'ADD_LIST_TEACHER';
export const IS_PROCESS = 'IS_PROCESS';
//Các hàm quản lý dữ liệu
export function setUser(user) {
    return {
        type: SET_USER,
        user: user
    }

}

export function setUserData(userData) {
    return {
        type: SET_USER_DATA,
        data: userData
    }

}

export function addListUser(listUser) {
    return {
        type: ADD_LIST_USER,
        data: listUser
    }

}

export function selectStudent(student) {
    return {
        type: SELECT_STUDENT,
        data: student
    }

}

export function selectTeacher(student) {
    return {
        type: SELECT_STUDENT,
        data: student
    }
}

export function selectClass(student) {
    return {
        type: SELECT_CLASS,
        data: student
    }

}

export function selectContract(student) {
    return {
        type: SELECT_CONTRACT,
        data: student
    }

}

export function selectEmployee(student) {
    return {
        type: SELECT_EMPLOYEE,
        data: student
    }

}

export function addListContract(data) {
    return {
        type: ADD_LIST_CONTRACT,
        data: data
    }
}

export function addListClass(data) {
    return {
        type: ADD_LIST_CLASS,
        data: data
    }
}

export function addListEmployee(data) {
    return {
        type: ADD_LIST_EMPLOYEE,
        data: data
    }
}
export function addListTeacher(data) {
    return {
        type: ADD_LIST_TEACHER,
        data: data
    }
}

export function isLoading(data) {
    return {
        type: IS_LOADING,
        data: data
    }
}

export function isLoadSelect(data) {
    return {
        type: IS_LOAD_SELECT,
        data: data
    }
}
export function isProcessAll(data) {
    return {
        type: IS_PROCESS,
        data: data
    }
}



