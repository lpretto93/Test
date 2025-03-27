// auth.js

import { auth } from "./firebase-config.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

// Selettori
const loginContainer = document.getElementById("login-container");
const gameContainer = document.getElementById("game-container");
const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorText = document.getElementById("login-error");
const gameMasterPanel = document.getElementById("game-master-panel");

// LOGIN
loginBtn.addEventListener("click", async () => {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    handleLoginSuccess(user);
  } catch (error) {
    errorText.textContent = "Login fallito: controlla email o password.";
  }
});

// REGISTRAZIONE
registerBtn.addEventListener("click", async () => {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    handleLoginSuccess(user);
  } catch (error) {
    errorText.textContent = "Registrazione fallita: " + error.message;
  }
});

// GESTIONE LOGIN RIUSCITO
function handleLoginSuccess(user) {
  loginContainer.style.display = "none";
  gameContainer.style.display = "block";

  const isGameMaster = user.email.toLowerCase().includes("gamemaster");
  if (isGameMaster) {
    gameMasterPanel.style.display = "block";
    console.log("Accesso GameMaster");
  }

  // Salviamo l'utente per il resto del gioco
  window.currentUser = {
    uid: user.uid,
    email: user.email,
    isGameMaster: isGameMaster
  };

  console.log("Utente loggato:", window.currentUser);
}
