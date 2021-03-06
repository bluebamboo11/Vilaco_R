import {auth} from './firebase';
import firebase from 'firebase/app';
// Sign Up
//Đăng ký
export const doCreateUserWithEmailAndPassword = (email, password) =>{
    return auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(function () {
            return auth.createUserWithEmailAndPassword(email, password);
        })
};

// Sign In
//Dăng nhập
export const doSignInWithEmailAndPassword = (email, password, keep) => {
    let Persistence = firebase.auth.Auth.Persistence.SESSION;
    if (keep) {
        Persistence = firebase.auth.Auth.Persistence.LOCAL;
    }
    return auth.setPersistence(Persistence)
        .then(function () {
            return auth.signInWithEmailAndPassword(email, password);
        })

};

// Sign out
//Đăng xuất
export const doSignOut = () =>
    auth.signOut();
// Password Reset

export const doPasswordReset = (email) =>
    auth.sendPasswordResetEmail(email);

// Password Change
//Thay đổi mật khẩu
export const doPasswordUpdate = (providedPassword,password,call) =>
    auth.currentUser.reauthenticateWithCredential(firebase.auth.EmailAuthProvider.credential(firebase.auth().currentUser.email, providedPassword)).then(()=>{
        auth.currentUser.updatePassword(password).then(()=>{
            call()
        });
    }).catch((error)=>{
        call(error.code)
    });
//Kiểm tra tài khoản login hay không
export const checkLogin = (callback) => {
  return   auth.onAuthStateChanged(function (user) {
        callback(user)
    });

};

