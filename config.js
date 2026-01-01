import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCtKjWTuSmawsTvdDhf1y4xuj-oAa3lkxA",
    authDomain: "srf-r1techlabs.firebaseapp.com",
    projectId: "srf-r1techlabs",
    storageBucket: "srf-r1techlabs.firebasestorage.app",
    messagingSenderId: "44552846828",
    appId: "1:44552846828:web:7137ac3a23e6b6311f94c9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const APP_ID = "calibration-srf-v1";
export const DOMAIN = "@r1.com";