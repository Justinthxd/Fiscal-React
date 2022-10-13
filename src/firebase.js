import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC1EghigIbZ5dmVY1Ivicyq4yrnOVzUJDg",
    authDomain: "fiscal-81d65.firebaseapp.com",
    projectId: "fiscal-81d65",
    storageBucket: "fiscal-81d65.appspot.com",
    messagingSenderId: "71145577143",
    appId: "1:71145577143:web:74eeece48f52e9e1774b32",
    measurementId: "G-HDQ0HZREL8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
