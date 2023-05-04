// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCl-I0X2IrlSXOpDVo4vpkV0lmUg1_uJ40",
    authDomain: "chef-recipe-hunter-b7m65a10.firebaseapp.com",
    projectId: "chef-recipe-hunter-b7m65a10",
    storageBucket: "chef-recipe-hunter-b7m65a10.appspot.com",
    messagingSenderId: "825909862548",
    appId: "1:825909862548:web:a6712d2fc65fbeda8e1481"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;