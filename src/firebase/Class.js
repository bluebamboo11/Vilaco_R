import {db, firebase} from './firebase';
import {getAllEmployee} from "./employee";

export function addNewClass(data) {
    data.timestamp = firebase.firestore.FieldValue.serverTimestamp();
    return db.collection('class').add(data)
}
export function updateClass(data,id) {
    return db.collection('class').doc(id).update(data)
}
function getAllTeacher(callback) {
    db.collection('user').where('type', '==', 'teacher').get().then((documentSnapshots) => {
        let list = [];
        documentSnapshots.forEach(function (doc) {
            let data = doc.data();
            data.id = doc.id;
            list.push(data);
        });
        callback(list);
    })
}

export function getAllClass(callback) {
    getAllTeacher((listTeacher) => {
        db.collection('class').orderBy("timestamp").get().then((documentSnapshots) => {
            let list = [];
            documentSnapshots.forEach(function (doc) {
                let data = doc.data();
                data.id = doc.id;
                list.push(data);
            });
            callback(list, listTeacher);
        })
    })
}

export function getAllClassOpen(isOpen, callback) {
    db.collection('class').where('open', '==', isOpen).orderBy("timestamp").get().then((documentSnapshots) => {
        let list = [];
        documentSnapshots.forEach(function (doc) {
            let data = doc.data();
            data.id = doc.id;
            list.push(data);
        });
        callback(list);
    })

}
export function getAllClassByTeacher(teacherId, callback) {
    db.collection('class').where('teacherId', '==', teacherId).orderBy("timestamp").get().then((documentSnapshots) => {
        let list = [];
        documentSnapshots.forEach(function (doc) {
            let data = doc.data();
            data.id = doc.id;
            list.push(data);
        });
        callback(list);
    })

}
export function getClassById(id) {
    return db.collection('class').doc(id).get()
}
