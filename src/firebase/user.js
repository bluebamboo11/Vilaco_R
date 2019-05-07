import {db, firebase} from './firebase';
import {userBo} from "../Bo/BoFirebase";
import {store} from "../index";
import {isProcessAll} from "../redux/actions";

// User API

export const doCreateUser = (id, user) => {
    user.timestamp = firebase.firestore.FieldValue.serverTimestamp();
    user.validate = false;
    return db.collection("user").doc(id).set(userBo(user));
};
export const doCreateUserTest = (user) => {
    user.timestamp = firebase.firestore.FieldValue.serverTimestamp();
    user.validate = false;
    return db.collection("user").add(userBo(user));
};
export const doUpdateUser = (id, user) =>
    db.collection("user").doc(id).update(user);

export const getOneUser = (uid, callback) => {
    if (!uid) {
        return callback()
    }
    db.collection("user").doc(uid).get().then(function (doc) {
        if (doc.exists) {
            callback(doc.data())
        } else {
            callback()
        }
    }).catch(function (error) {
        console.log("Error getting document:", error);
        callback()
    });
};
export const getAccess = (uid, type, callback) => {
    db.collection("security").doc('role').collection(type).doc(uid).get().then((doc) => {
        if (doc.exists) {
            callback(doc.data())
        } else {
            callback()
        }
    })
};
export const checkActive = (uid, callback) => {
    getOneUser(uid, (data) => {
        if (data) {
            getAccess(uid, data.type, (access) => {
                if (access && access.validate) {
                    callback('active')
                } else {
                    callback('unActive')
                }
            })
        } else {
            callback('non');
        }
    })
};

export const searchAllUser = (searchKey, type, callback) => {
    if (searchKey) {
        store.dispatch(isProcessAll(true));
        let allPromise = [];
        allPromise.push(db.collection("user").where('type', '==', type).where('email', '==', searchKey).get());
        allPromise.push(db.collection("user").where('type', '==', type).where('name', '==', searchKey).get());
        allPromise.push(db.collection("user").where('type', '==', type).where('phone', '==', searchKey).get());
        Promise.all(allPromise).then((listData) => {
            store.dispatch(isProcessAll(false));
            let listUser = [];
            if (listData) {
                listData.forEach((data) => {
                    data.forEach((doc) => {
                        let user = doc.data();
                        user.uid = doc.id;
                        listUser.push(user);
                    })
                })
            }
            callback(listUser);
        })
    }

};

export const getAllUser = (next, type, validate, callback) => {
    store.dispatch(isProcessAll(true));
    let first = db.collection("user").where('type', '==', type).orderBy("timestamp", 'desc').limit(25);
    if (validate) {
        first = first.where('validate', '==', validate.value);
    }
    if (next) {
        first = next
    }
    first.get().then(function (documentSnapshots) {
        store.dispatch(isProcessAll(false));
        let listUser = [];
        documentSnapshots.forEach(function (doc) {
            let user = doc.data();
            user.uid = doc.id;
            listUser.push(user);
        });
        const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
        if (lastVisible) {
            let next = db.collection("user").where('type', '==', type)
                .orderBy("timestamp", 'desc')
                .startAfter(lastVisible)
                .limit(25);
            if (validate) {
                next = next.where('validate', '==', validate.value);
            }
            callback(listUser, next)
        } else {
            callback(listUser)
        }
    });

};

export const getAllStudentByContract = (contractId, callback) => {
    db.collection("user").where('type', '==', 'student').where('contractId', '==', contractId).orderBy("timestamp").get().then(function (documentSnapshots) {
        let listUser = [];
        documentSnapshots.forEach(function (doc) {
            let user = doc.data();
            user.uid = doc.id;
            listUser.push(user);
        });
        callback(listUser)

    });

};
export const getAllStudentByClass = (classId, callback) => {
    db.collection("user").where('type', '==', 'student').where('classId', '==', classId).orderBy("timestamp").get().then(function (documentSnapshots) {
        let listUser = [];
        documentSnapshots.forEach(function (doc) {
            let user = doc.data();
            user.uid = doc.id;
            listUser.push(user);
        });
        callback(listUser)

    });

};
export const getAllAdmin = ( callback) => {
    store.dispatch(isProcessAll(true));
    db.collection("user").where('type', '==', 'teacher').where('admin', '==', true).orderBy("timestamp").get().then(function (documentSnapshots) {
        let listUser = [];
        store.dispatch(isProcessAll(false));
        documentSnapshots.forEach(function (doc) {
            let user = doc.data();
            user.uid = doc.id;
            listUser.push(user);
        });
        callback(listUser)

    });

};
export const getAllStudent = (next, fieldPath, value, callback) => {
    let first = db.collection("user").where('type', '==', 'student').where(fieldPath, '==', value).orderBy("timestamp", 'desc').limit(25);
    if (next) {
        first = next
    }
    first.get().then(function (documentSnapshots) {
        let listUser = [];
        documentSnapshots.forEach(function (doc) {
            let user = doc.data();
            user.uid = doc.id;
            listUser.push(user);
        });
        const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
        if (lastVisible) {
            let next = db.collection("user").where('type', '==', 'student').where(fieldPath, '==', value)
                .orderBy("timestamp", 'desc')
                .startAfter(lastVisible)
                .limit(25);
            callback(listUser, next)
        } else {
            callback(listUser)
        }
    });

};




