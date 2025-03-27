// game.js

import { db } from "./firebase-config.js";

// Simula giocatori per adesso
let players = [];
let currentTurn = 0;
let turnCounter = 0;
const maxTurns = 50;

const log = document.getElementById("game-log");
const modal = document.getElementById("question-modal");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("question-options");

function startGame() {
  // Simuliamo 3 giocatori per test
  players = [
    { name: "Player 1", position: 0, eliminated: false },
    { name: "Player 2", position: 0, eliminated: false },
    { name: "Player 3", position: 0, eliminated: false }
  ];
  currentTurn = 0;
  turnCounter = 0;
  nextTurn();
}

async function nextTurn() {
  if (turnCounter >= maxTurns) {
    log.textContent = "🎉 Gioco terminato!";
    return;
  }

  const player = players[currentTurn];
  if (player.eliminated) {
    advanceTurn();
    return;
  }

  log.textContent = `🎲 Turno di ${player.name}`;
  const difficolta = Math.ceil(Math.random() * 3);
  const domanda = await fetchDomanda(difficolta);
  mostraDomanda(domanda, player, difficolta);
}

function mostraDomanda(domanda, player, difficolta) {
  modal.style.display = "block";
  questionText.textContent = domanda.domanda;
  optionsContainer.innerHTML = "";

  domanda.opzioni.forEach((opzione) => {
    const btn = document.createElement("button");
    btn.textContent = opzione;
    btn.onclick = () => {
      modal.style.display = "none";
      const corretta = opzione === domanda.rispostaCorretta;
      aggiornaPosizione(player, corretta, difficolta);
      advanceTurn();
    };
    optionsContainer.appendChild(btn);
  });
}

function aggiornaPosizione(player, corretta, difficolta) {
  let movimento = 0;
  if (corretta) {
    movimento = difficolta;
    log.textContent = `✅ Risposta corretta! ${player.name} avanza di ${movimento} caselle.`;
  } else {
    movimento = difficolta === 1 ? -3 : difficolta === 2 ? -2 : -1;
    log.textContent = `❌ Risposta sbagliata! ${player.name} retrocede di ${Math.abs(movimento)} caselle.`;
  }
  player.position += movimento;
  if (player.position < 0) player.position = 0;
}

function advanceTurn() {
  currentTurn = (currentTurn + 1) % players.length;
  turnCounter++;
  setTimeout(nextTurn, 1000);
}

async function fetchDomanda(difficolta) {
  const res = await fetch(
    `https://YOUR_CLOUD_FUNCTION_URL/generaDomanda?difficolta=${difficolta}`
  );
  const data = await res.json();
  return data;
}

window.addEventListener("load", startGame);
