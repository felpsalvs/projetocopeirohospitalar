import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

let firebaseConfig = {
    apiKey: "AIzaSyB8j1nQSmmoOXirWiFiI5PWHwK94Q2bvKA",
    authDomain: "projeto-copeiro.firebaseapp.com",
    projectId: "projeto-copeiro",
    storageBucket: "projeto-copeiro.appspot.com",
    messagingSenderId: "225123119675",
    appId: "1:225123119675:web:c5f181c2390b9fdff7221e",
    measurementId: "G-ZS1N350BL5"
  };
  
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }

  export default firebase;