import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB7iqyRaJpHTtqW755CqxpDcVic0RMrL8o",
    authDomain: "miniblog-ff5cd.firebaseapp.com",
    projectId: "miniblog-ff5cd",
    storageBucket: "miniblog-ff5cd.firebasestorage.app",
    messagingSenderId: "169704883838",
    appId: "1:169704883838:web:c8292f73900b4177893a2f"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, app };