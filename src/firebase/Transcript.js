import {db} from './firebase';
import {transcriptBo} from "../Bo/BoFirebase";
import {store} from "../index";
import {isProcessAll} from "../redux/actions";

export function save(data) {
    if (!data.id) {
        return db.collection('transcript').add(transcriptBo(data));
    } else {
        return db.collection('transcript').doc(data.id).update(transcriptBo(data));
    }
}
export function update(id,data) {
        return db.collection('transcript').doc(id).update(data);
}
export function getAllbyClass(classId, callback) {
    return db.collection('transcript').where('classId', '==', classId).get().then((documentSnapshots) => {
        let list = [];
        documentSnapshots.forEach(function (doc) {
            let data = doc.data();
            data.id = doc.id;
            list.push(data);
        });
        callback(list);
    })

}
export function getAllDatabyUser(uid, callback) {
    return db.collection('transcript').where('uid', '==', uid).get().then((documentSnapshots) => {
        let list = [];
        documentSnapshots.forEach(function (doc) {
            let data = doc.data();
            data.id = doc.id;
            list.push(data);
        });
        callback(list);
    })

}
export function getTop(month,type, callback) {
    store.dispatch(isProcessAll(true));
    return db.collection('transcript').where('month', '==', month).orderBy(type,'desc').limit(16).get().then((documentSnapshots) => {
        store.dispatch(isProcessAll(false));
        let list = [];
        documentSnapshots.forEach(function (doc) {
            let data = doc.data();
            data.id = doc.id;
            list.push(data);
        });
        callback(list);
    })

}
