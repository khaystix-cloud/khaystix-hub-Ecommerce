import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_QPd1d5PSD4drcr7Z2MKied5DBy7Ol5c",
  authDomain: "khaystix-hub-7ce14.firebaseapp.com",
  databaseURL: "https://khaystix-hub-7ce14.firebaseio.com",
  projectId: "khaystix-hub-7ce14",
  storageBucket: "khaystix-hub-7ce14.appspot.com",
  messagingSenderId: "639408348054",
  appId: "1:639408348054:web:0af8b2e6081f0f4e241bb7",
  measurementId: "G-1FLVYMF7CD"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };