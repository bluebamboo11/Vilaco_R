import {db} from './firebase';
import {userService} from "./index";
//xóa tài khoản
export const removeUser = (uid) => {
    return db.collection("user").doc(uid).delete()
};
//xác nhận tài khoản
export const validateUser = (uid, type, callback) => {
    db.collection("user").doc(uid).update({validate: true}).then(() => {
        db.collection("security").doc('role').collection(type).doc(uid).set({validate: true}).then(() => {
            callback();
        })
    }).catch((err) => {
        console.log(err);
    })
};
//cấp quẩn admin
export const setAdmin = (id) => {
    return db.collection("security").doc('role').collection('admin').doc(id).set({validate: true})
};
//Xóa quyền admin
export const removeAdmin = (id) => {
    return db.collection("security").doc('role').collection('admin').doc(id).delete();
};
//Chuyển quyền quản trị cao cấp
export const setSuperAdmin = (id, myId, callback) => {
    console.log(1);
    Promise.all([db.collection("security").doc('role').collection('superAdmin').doc(id).set({validate: true}),
        db.collection("security").doc('role').collection('superAdmin').doc(myId).delete(),
        userService.doUpdateUser(id,{superAdmin: true,admin:true}),
        userService.doUpdateUser(myId,{superAdmin: false,admin: false})]).then(callback)
};

