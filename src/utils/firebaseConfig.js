// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrdSnePaJJ2q9K8kHAAZ7hUvwZOvpgpJM",
  authDomain: "fus-shop.firebaseapp.com",
  projectId: "fus-shop",
  storageBucket: "fus-shop.appspot.com",
  messagingSenderId: "725844653919",
  appId: "1:725844653919:web:6684f8b597f4546664e8ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db