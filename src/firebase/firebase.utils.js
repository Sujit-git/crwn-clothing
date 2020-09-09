import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBkLpcA2V5Q0IufbPXS71hakOwBmHYzs0A",
    authDomain: "crwn-db-c63f1.firebaseapp.com",
    databaseURL: "https://crwn-db-c63f1.firebaseio.com",
    projectId: "crwn-db-c63f1",
    storageBucket: "crwn-db-c63f1.appspot.com",
    messagingSenderId: "1079570486516",
    appId: "1:1079570486516:web:ec3362c8b2552b0ff57aa1",
    measurementId: "G-WS6RGDSRN4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;