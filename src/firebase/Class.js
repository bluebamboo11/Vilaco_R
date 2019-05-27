import {db, firebase} from './firebase';
import {classBo} from "../Bo/BoFirebase";
import {store} from "../index";
import {isProcessAll} from "../redux/actions";

//THêm mới lớp học
export function addNewClass(data) {
    data.timestamp = firebase.firestore.FieldValue.serverTimestamp();
    return db.collection('class').add(classBo(data))
}
//Cập nhật lớp học
export function updateClass(data) {
    console.log(data)
    return db.collection('class').doc(data.id).update(classBo(data))
}
//Lây danh sách giáo viên
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
//Lây danh sách lớp học
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
//Lây danh sách lớp học đang mở
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
//Lây danh sách lớp học theo giáo viên
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
//Lây thông tin lớp học theo id
export function getClassById(id) {
    return db.collection('class').doc(id).get()
}
