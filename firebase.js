import firebase from 'firebase';

const firebaseConfig={
    //Fill in your firebase details here
    apiKey: "AIzaSyC3W1TMhkpDAAi99HDzUDK9Xyho4fwNOH8",
    authDomain: "bt3103-week-6-6d7a1.firebaseapp.com",
    projectId: "bt3103-week-6-6d7a1",
    storageBucket: "bt3103-week-6-6d7a1.appspot.com",
    messagingSenderId: "500245567523",
    appId: "1:500245567523:web:8a666b2921902ac6dd3996",
    measurementId: "G-Z8RKQ1KVQW"

}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;