// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQMtdv7-R7cAz1qk_tbqDgHjRxZXt3bg4",
  authDomain: "college-booking-adeec.firebaseapp.com",
  projectId: "college-booking-adeec",
  storageBucket: "college-booking-adeec.appspot.com",
  messagingSenderId: "439380185892",
  appId: "1:439380185892:web:6093173ef83930a14259b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app