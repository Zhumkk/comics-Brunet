import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyC2lKAgx-HnFjQSm5J7M7n85CN4ozcT9hk",
    authDomain: "coderhouse-ecommerce-78692.firebaseapp.com",
    projectId: "coderhouse-ecommerce-78692",
    storageBucket: "coderhouse-ecommerce-78692.appspot.com",
    messagingSenderId: "386818185419",
    appId: "1:386818185419:web:ccdf8dfd42db447919634e"
  };


  const fb = firebase.initializeApp(firebaseConfig);

  export const dataBase = fb.firestore();