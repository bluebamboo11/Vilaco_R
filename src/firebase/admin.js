import {db, firebase} from './firebase';
import {userBo} from "../Bo/BoFirebase";

export const removeUser = (uid) => {
    return db.collection("user").doc(uid).delete()
};

export const validateUser = (uid, type, callback) => {
    db.collection("user").doc(uid).update({validate: true}).then(() => {
        db.collection("security").doc('role').collection(type).doc(uid).set({validate: true}).then(() => {
            callback();
        })
    }).catch((err) => {
        console.log(err);
    })
};
