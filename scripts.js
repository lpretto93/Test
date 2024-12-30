let players = [];
let currentPlayer = 0;

function startGame() {
    const numPlayers = document.getElementById('numPlayers').value;
    for (let i = 0; i < numPlayers; i++) {
        players.push({ name: `Giocatore ${i + 1}`, score: 0 });
    }
    document.getElementById('player-setup').style.display = 'none';
    document.getElementById('game').style.display = 'block';
    updateScoreboard();
    fetchQuestion();
}

function fetchQuestion() {
    // Qui dovresti interfacciarti con il servizio di Copilot per ottenere una domanda
    // Per ora, useremo una domanda finta
    document.getElementById('question').innerText = 'Qual è la capitale d’Italia?';
}

function submitAnswer() {
    const answer = document.getElementById('answer').value;
    // Qui dovresti verificare la risposta con il servizio di Copilot
    // Supponiamo che la risposta sia corretta
    if (answer.toLowerCase() === 'roma') {
        players[currentPlayer].score += 1;
    }
    currentPlayer = (currentPlayer + 1) % players.length;
    updateScoreboard();
    fetchQuestion();
    document.getElementById('answer').value = '';
}

function updateScoreboard() {
    const scoreboard = document.getElementById('scoreboard');
    scoreboard.innerHTML = '';
    players.forEach(player => {
        const li = document.createElement('li');
        li.innerText = `${player.name}: ${player.score}`;
        scoreboard.appendChild(li);
    });
}
