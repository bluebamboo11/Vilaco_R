import {auth} from './firebase';
import firebase from 'firebase/app';
// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);
// Sign In
export const doSignInWithEmailAndPassword = (email, password, keep) => {
    let Persistence = firebase.auth.Auth.Persistence.SESSION;
    if (keep) {
        console.log(1);
        Persistence = firebase.auth.Auth.Persistence.LOCAL;
    }
    return auth.setPersistence(Persistence)
        .then(function () {
            return auth.signInWithEmailAndPassword(email, password);
        })

};


// Sign out
export const doSignOut = () =>
    auth.signOut();
// Password Reset
export const doPasswordReset = (email) =>
    auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = (providedPassword,password,call) =>
    auth.currentUser.reauthenticateWithCredential(firebase.auth.EmailAuthProvider.credential(firebase.auth().currentUser.email, providedPassword)).then(()=>{
        auth.currentUser.updatePassword(password).then(()=>{
            call()
        });
    }).catch((error)=>{
        call(error.code)
    });

export const checkLogin = (callback) => {
  return   auth.onAuthStateChanged(function (user) {
        callback(user)
    });

};

