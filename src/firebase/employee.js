import {db, firebase} from './firebase';
import {employeeBo} from "../Bo/BoFirebase";
import {store} from "../index";
import {isProcessAll} from "../redux/actions";
//THêm nhân viên phòng nhật
export function addNewEmployee(data) {
    data.timestamp = firebase.firestore.FieldValue.serverTimestamp();
    return db.collection('employees-japan').add(employeeBo(data))
}
//Xóa
export function removeEmployee(id) {
    return db.collection('employees-japan').doc(id).delete()
}
//lấy và update danh sách nhân viên theo thời gian thực
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
//lây danh sách nhân viên
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
//Lây một nhân viên theo id
export  function getOneEmployee(id) {
    return db.collection('employees-japan').doc(id).get()
}
//Cập nhật thông tin nhân viên
export  function updateEmployee(id,data) {
    return db.collection('employees-japan').doc(id).update(employeeBo(data))
}
