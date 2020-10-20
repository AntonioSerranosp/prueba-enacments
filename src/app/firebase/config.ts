// import firebase  from 'firebase/app';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

const  firebaseConfig = {
    apiKey: "AIzaSyBfWzqpUeYftJAqV3cik3fYsqo3iihRS94",
    authDomain: "enacment-test.firebaseapp.com",
    databaseURL: "https://enacment-test.firebaseio.com",
    projectId: "enacment-test",
    storageBucket: "enacment-test.appspot.com",
    messagingSenderId: "923646154786",
    appId: "1:923646154786:web:b9fac0bef9ca442693527b",
    measurementId: "G-DKRDTX2EHT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

console.log('firebase configurado');

export default firebase.firestore();