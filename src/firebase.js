import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAzRGLQcCxvhoOf84Wbm4WXrRyXV0A1mYg",
    authDomain: "messenger-clone-r.firebaseapp.com",
    projectId: "messenger-clone-r",
    storageBucket: "messenger-clone-r.appspot.com",
    messagingSenderId: "915947605822",
    appId: "1:915947605822:web:c875dd46c1ce3f56de266f",
    measurementId: "G-9J1YTCG8WG"
})

const db = firebaseApp.firestore()

export default db