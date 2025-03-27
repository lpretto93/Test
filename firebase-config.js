// firebase-config.js

// Importa le librerie Firebase tramite CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// ⚠️ Incolla qui la tua configurazione personale
const firebaseConfig = {
  apiKey: "TUO_API_KEY",
  authDomain: "gioco-dell-oca.firebaseapp.com",
  projectId: "gioco-dell-oca",
  storageBucket: "gioco-dell-oca.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abc123"
};

// Inizializza Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
