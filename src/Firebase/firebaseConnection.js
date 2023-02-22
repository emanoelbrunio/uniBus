import firebase from 'firebase/app';
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCvsayBvlxl85qE_6PPqCJOdcHQYs2dr7Y",
    authDomain: "unibus-5e282.firebaseapp.com",
    projectId: "unibus-5e282",
    storageBucket: "unibus-5e282.appspot.com",
    messagingSenderId: "499502000280",
    appId: "1:499502000280:web:03bf59aa2a16a47d0148ed"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;