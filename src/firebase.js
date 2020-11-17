import firebase from 'firebase/app'
import 'firebase/auth'

var app = firebase.initializeApp( {
  apiKey: "AIzaSyDfZlt6ewxIW-xB0heFf_P7AceHXUg-_Yk",
  authDomain: "auth-development-e27e6.firebaseapp.com",
  databaseURL: "https://auth-development-e27e6.firebaseio.com",
  projectId: "auth-development-e27e6",
  storageBucket: "auth-development-e27e6.appspot.com",
  messagingSenderId: "386005807870",
  appId: "1:386005807870:web:df5de4f0d6fad5f8a36baf"
  });
  export const auth = firebase.auth()
  export default app