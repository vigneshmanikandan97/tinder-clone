import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCRQKopZhmXTTyRRTGylqjrObzcfjqbsMo",
    authDomain: "tinder-clone-0612.firebaseapp.com",
    projectId: "tinder-clone-0612",
    storageBucket: "tinder-clone-0612.appspot.com",
    messagingSenderId: "155087068084",
    appId: "1:155087068084:web:ea1b4aa1883a0cc1b4f0e1",
    measurementId: "G-8MQ6YJZ28M"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;