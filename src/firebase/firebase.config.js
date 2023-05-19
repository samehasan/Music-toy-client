// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOPMZWh5wu_0_3s-YRUz4m3W9bqBSXqx8",
  authDomain: "music-toy.firebaseapp.com",
  projectId: "music-toy",
  storageBucket: "music-toy.appspot.com",
  messagingSenderId: "52212859531",
  appId: "1:52212859531:web:95c2b8fc8596fb71bb4a8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
