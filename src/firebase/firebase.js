import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var config = {
    apiKey: "AIzaSyAvpiP1YkPW0jtQogJhb70zCo1j2tkzrxA",
    authDomain: "dev1-f8dbd.firebaseapp.com",
    databaseURL: "https://dev1-f8dbd.firebaseio.com",
    projectId: "dev1-f8dbd",
    storageBucket: "dev1-f8dbd.appspot.com",
    messagingSenderId: "744400182897"
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const db = firebase.database();
const auth = firebase.auth();

export { db, auth };