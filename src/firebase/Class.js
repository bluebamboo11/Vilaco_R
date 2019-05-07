import {db, firebase} from './firebase';
import {classBo} from "../Bo/BoFirebase";
import {store} from "../index";
import {isProcessAll} from "../redux/actions";


export function addNewClass(data) {
    data.timestamp = firebase.firestore.FieldValue.serverTimestamp();
    return db.collection('class').add(classBo(data))
}
export function updateClass(data) {
    console.log(data)
    return db.collection('class').doc(data.id).update(classBo(data))
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
    store.dispatch(isProcessAll(true));
    getAllTeacher((listTeacher) => {
        db.collection('class').orderBy("timestamp").get().then((documentSnapshots) => {
            store.dispatch(isProcessAll(false));
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
