import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC23l-hVuT6d8B8O4E-0NuqX1Cqe9xwEFA",
    authDomain: "booksapp-38c55.firebaseapp.com",
    projectId: "booksapp-38c55",
    storageBucket: "booksapp-38c55.appspot.com",
    messagingSenderId: "151578908405",
    appId: "1:151578908405:web:09b0277850d8a0e77317bc",
    measurementId: "G-LRX7DPBK3J"
};
firebase.initializeApp(firebaseConfig);

export default firebase;