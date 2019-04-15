import {db, firebase} from './firebase';

export function addNewEmployee(data) {
    data.timestamp = firebase.firestore.FieldValue.serverTimestamp();
    return db.collection('employees-japan').add(data)
}

export function listenAllEmployee(callback) {
    return db.collection('employees-japan').orderBy("timestamp").onSnapshot((querySnapshot) => {
        let list = [];
        querySnapshot.forEach(function (doc) {
            let employees = doc.data();
            employees.id = doc.id;
            list.push(employees);
        });
        callback(list);
    })
}

export function getAllEmployee(callback) {
    db.collection('employees-japan').orderBy("timestamp").get().then((querySnapshot) => {
        let list = [];
        querySnapshot.forEach(function (doc) {
            let employees = doc.data();
            employees.id = doc.id;
            list.push(employees);
        });
        callback(list);
    })
}
