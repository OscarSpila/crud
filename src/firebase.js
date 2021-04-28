import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAMj0Qe7aZ9ik-DynZEP8mQyzLMkOMRQ2g",
    authDomain: "crud-ee176.firebaseapp.com",
    projectId: "crud-ee176",
    storageBucket: "crud-ee176.appspot.com",
    messagingSenderId: "462469893728",
    appId: "1:462469893728:web:3e925d5c39bcdd7590fd05"
  }

export const firebaseApp = firebase.initializeApp(firebaseConfig)
