import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB8E2SIbKuTSuhKKJIuwaHNbaNNGg9kIdM",
    authDomain: "clone-be018.firebaseapp.com",
    projectId: "clone-be018",
    storageBucket: "clone-be018.appspot.com",
    messagingSenderId: "572731960298",
    appId: "1:572731960298:web:a6344484fd7a550079a093",
    measurementId: "G-K2S492X1XM"
});
// the firebaseApp which we initialized above, using that we can use it get firestore which will have all the data
// we are storing it in a variable called db and we are exporting it

const db=firebaseApp.firestore();
const auth=firebaseApp.auth();
export {db,auth};