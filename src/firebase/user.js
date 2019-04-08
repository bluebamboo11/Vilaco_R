import {db,firebase} from './firebase';
import {userBo} from "../Bo/BoFirebase";

// User API

export const doCreateUser = (id, user) =>{
    user.timestamp = firebase.firestore.FieldValue.serverTimestamp();;
    return  db.collection("user").doc(id).set(userBo(user));
};

export const doUpdateUser = (id, user) =>
    db.collection("user").doc(id).update(userBo(user));

export const getOneUser = (uid, callback) => {
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
export const getAccess = (uid, callback) => {
    db.doc("user/" + uid + '/access/type').get().then((doc) => {
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
            getAccess(uid, (access) => {
                if (access) {
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

export const searchAllUser = (callback, searchKey) => {
    if (searchKey) {
        let allPromise = [];
        allPromise.push(db.collection("user").where('email', '==', searchKey).get());
        allPromise.push(db.collection("name").where('email', '==', searchKey).get());
        allPromise.push(db.collection("phone").where('email', '==', searchKey).get());
        Promise.all(allPromise).then((data) => {

        })
    }

};

export const getAllUser = (next, type,callback) => {
    let first = db.collection("user").where('type','==',type).orderBy("timestamp").limit(25);
    if (next) {
        first = next
    }
    first.get().then(function (documentSnapshots) {
        let listUser = [];
        documentSnapshots.forEach(function (doc) {
            let user = doc.data();
            user.id = doc.id;
            listUser.push(user);
        });
        const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
       if(lastVisible){
           let next = db.collection("user").where('type','==',type)
               .orderBy("timestamp")
               .startAfter(lastVisible)
               .limit(25);
           callback(listUser,next)
       }else {
           callback(listUser)
       }
    });

};
