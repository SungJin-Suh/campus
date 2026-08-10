//------------------------------------------------------------------
// Copy this file to scripts/firebaseAPI_hackathon.js and fill in your
// own values. That filename is gitignored, so your config stays local.
//
// Firebase console ▸ Project settings ▸ General ▸ Your apps ▸ Config
//------------------------------------------------------------------

const firebaseConfig = {
    apiKey: "YOUR_FIREBASE_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.firebasestorage.app",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();