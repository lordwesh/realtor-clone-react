// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXYnPvJ0xALBV6t3xIFB0xCDOWcogqEPs",
  authDomain: "realtor-clone-react-3384d.firebaseapp.com",
  projectId: "realtor-clone-react-3384d",
  storageBucket: "realtor-clone-react-3384d.appspot.com",
  messagingSenderId: "793342572466",
  appId: "1:793342572466:web:eefc9a20856deccb0c96ab",
  measurementId: "G-L90767XR3X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();

