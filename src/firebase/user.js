import {db} from './firebase';

// User API

export const doCreateUser = (id,user) =>
    db.collection("user").doc(id).set(user);



export const getOneUser = (uid,callback) => {
    db.collection("user").doc(uid).then(function(doc) {
        if (doc.exists) {
            callback(doc.data())
        } else {
            callback()
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
        callback()
    });
};
