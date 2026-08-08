const firebaseConfig = {
    apiKey: "AIzaSyDLQp30snWp-xXX70UVWipBGKJCtcfqMgY",
    authDomain: "campus-portfolio-ecdcc.firebaseapp.com",
    projectId: "campus-portfolio-ecdcc",
    storageBucket: "campus-portfolio-ecdcc.firebasestorage.app",
    messagingSenderId: "4022626116",
    appId: "1:4022626116:web:a9b92f102404a35ba79911",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
