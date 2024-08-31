// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCCSppmYzmNImO_49dlBMVbR8_dxU6pQ0s",
    authDomain: "asia-lb.firebaseapp.com",
    projectId: "asia-lb",
    storageBucket: "asia-lb.appspot.com",
    messagingSenderId: "542622985658",
    appId: "1:542622985658:web:f5f27407c9671e5f450183",
    measurementId: "G-LGQ8LYGE2Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);