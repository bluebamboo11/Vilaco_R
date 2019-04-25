import {db, firebase} from './firebase';
import {employeeBo} from "../Bo/BoFirebase";

export function addNewEmployee(data) {
    data.timestamp = firebase.firestore.FieldValue.serverTimestamp();
    return db.collection('employees-japan').add(employeeBo(data))
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
export  function getOneEmployee(id) {
    return db.collection('employees-japan').doc(id).get()
}
export  function updateEmployee(id,data) {
    return db.collection('employees-japan').doc(id).update(employeeBo(data))
}
