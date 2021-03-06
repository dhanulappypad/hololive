import firebase from 'firebase';

var firebaseApp =  firebase.initializeApp({
    apiKey: "AIzaSyCfDq9sLmEbUKa3fLxx8ZVnHgxfECIGzhU",
    authDomain: "holo-4654c.firebaseapp.com",
    databaseURL: "https://holo-4654c-default-rtdb.firebaseio.com",
    projectId: "holo-4654c",
    storageBucket: "holo-4654c.appspot.com",
    messagingSenderId: "921560445660",
    appId: "1:921560445660:web:c27005da5bb8a97844fa19",
    measurementId: "G-VB1Z1TWKZH"
});

var db = firebaseApp.firestore();

export {db};