// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU8FZFhW8JxGKecM3c6GXJJIrduGLTYE4",
  authDomain: "service-review-f2d1c.firebaseapp.com",
  projectId: "service-review-f2d1c",
  storageBucket: "service-review-f2d1c.firebasestorage.app",
  messagingSenderId: "657948486571",
  appId: "1:657948486571:web:5583b0ee2c4362024b80ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth