import {db} from './firebase';
import {transcriptBo} from "../Bo/BoFirebase";

export function save(data) {
    if (!data.id) {
        return db.collection('transcript').add(transcriptBo(data));
    } else {
        return db.collection('transcript').doc(data.id).update(transcriptBo(data));
    }
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
