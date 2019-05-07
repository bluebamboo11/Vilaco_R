import {db, firebase} from './firebase';
import {employeeBo} from "../Bo/BoFirebase";
import {store} from "../index";
import {isProcessAll} from "../redux/actions";

export function addNewEmployee(data) {
    data.timestamp = firebase.firestore.FieldValue.serverTimestamp();
    return db.collection('employees-japan').add(employeeBo(data))
}
export function removeEmployee(id) {
    return db.collection('employees-japan').doc(id).delete()
}
export function listenAllEmployee(callback) {
    store.dispatch(isProcessAll(true));
    return db.collection('employees-japan').orderBy("timestamp",'desc').onSnapshot((querySnapshot) => {
        store.dispatch(isProcessAll(false));
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
