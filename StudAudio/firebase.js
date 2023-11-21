// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAuth} from "firebase/auth";
import{getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWHC_-yYSgyPZUJBbYQeHT6cCPjRN04I0",
  authDomain: "stuaudio-d0a57.firebaseapp.com",
  projectId: "stuaudio-d0a57",
  storageBucket: "stuaudio-d0a57.appspot.com",
  messagingSenderId: "845797597849",
  appId: "1:845797597849:web:0b32e13b37d41506c1ce08"
};

// Initialize Firebase
export const FireBaseApp = initializeApp(firebaseConfig);
export const FireBaseAuth = getAuth(FireBaseApp);
export const FireStore= getFirestore(FireBaseApp);
