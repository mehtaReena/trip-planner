import firebase from 'firebase';
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyDBK3uICw-kGtNcHvT26rWRBs9ygj4T8mE",
    authDomain: "tripplanner-98220.firebaseapp.com",
    projectId: "tripplanner-98220",
    storageBucket: "tripplanner-98220.appspot.com",
    messagingSenderId: "744242284128",
    appId: "1:744242284128:web:2992f37e7a34997f50a505",
    measurementId: "G-SV2N5S1X4L"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }

  export const database=firebase.firestore();
