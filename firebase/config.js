
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyDXdnXTccjLeiFaRGkPp8Mheg4VZaR6CaQ",
    authDomain: "aerodynamic-store.firebaseapp.com",
    projectId: "aerodynamic-store",
    storageBucket: "aerodynamic-store.appspot.com",
    messagingSenderId: "546693813283",
    appId: "1:546693813283:web:f1efb70377b4e45b18cd96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseConnections = () => app