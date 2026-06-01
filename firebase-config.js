// firebase-config.js
const firebaseConfig = {
    apiKey: "AIzaSyA4COgeJSENsHrQHDx39gpZvif3zVrGjYE",
    authDomain: "identidadeccb.firebaseapp.com",
    projectId: "identidadeccb",
    storageBucket: "identidadeccb.firebasestorage.app",
    messagingSenderId: "385467794937",
    appId: "1:385467794937:web:d2eb32429586f018e2a928"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();