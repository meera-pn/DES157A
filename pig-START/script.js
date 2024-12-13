
document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.querySelector('body');

    const gameData = {
        dice1: ['images/di1_1.png', 'images/di1_2.png', 'images/di1_3.png', 'images/di1_4.png', 'images/di1_5.png', 'images/di1_6.png'],
        dice2: ['images/di2_1.png', 'images/di2_2.png', 'images/di2_3.png', 'images/di2_4.png', 'images/di2_5.png', 'images/di2_6.png'],
        players: ['Player 1', 'Player 2'],
        scores: [0, 0],
        currentPlayer: 0,
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        winningScore: 30
    };

    function showInstructions() {
        mainContainer.innerHTML = `
            <div id="instructions">
                <h1>Game of PIG</h1>
                <p>The first player to reach 30 points wins. Be careful: rolling a "1" ends your turn, and rolling two "1"s resets your score!</p>
                <button id="startgame">Start the Game</button>
            </div>
        `;
        document.querySelector('#startgame').addEventListener('click', startGame);
    }

    function startGame() {
        gameData.currentPlayer = Math.floor(Math.random() * 2);

        mainContainer.innerHTML = `
            <div id="game">
                <h1>Game of PIG</h1>
                <div id="gamecontrol">
                    <h2>The game has started!</h2>
                    <button id="quit">Quit</button>
                </div>
                <p id="player-turn">Welcome! It's ${gameData.players[gameData.currentPlayer]}'s turn.</p>
                <div id="dice-container">
                    <img id="die1" src="images/di1_1.png" alt="Die 1">
                    <div id="action-area">
                        <button id="roll">Roll the Dice</button>
                        <div id="roll-options" class="hidden">
                            <button id="rollAgain">Roll Again</button>
                            <button id="pass">Pass</button>
                        </div>
                    </div>
                    <img id="die2" src="images/di2_1.png" alt="Die 2">
                </div>
                <div id="score"></div>
            </div>
        `;

        document.querySelector('#quit').addEventListener('click', showInstructions);
        document.querySelector('#roll').addEventListener('click', throwDice);
    }

    function toggleButtons(showRollDice) {
        const rollBtn = document.querySelector('#roll');
        const rollOptions = document.querySelector('#roll-options');

        if (showRollDice) {
            rollBtn.classList.remove('hidden');
            rollOptions.classList.add('hidden');
        } else {
            rollBtn.classList.add('hidden');
            rollOptions.classList.remove('hidden');
        }
    }

    function setUpTurn() {
        const playerTurn = document.querySelector('#player-turn');
        toggleButtons(true); 
        playerTurn.textContent = `It's ${gameData.players[gameData.currentPlayer]}'s turn. Roll the dice!`;
    }

    function throwDice() {
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;

        document.querySelector('#die1').src = gameData.dice1[gameData.roll1 - 1];
        document.querySelector('#die2').src = gameData.dice2[gameData.roll2 - 1];

        gameData.rollSum = gameData.roll1 + gameData.roll2;

        if (gameData.rollSum === 2) {
            updateMessage("Snake eyes! You lose all points!");
            gameData.scores[gameData.currentPlayer] = 0;
            updateScore();
            switchPlayer();
            setTimeout(setUpTurn, 2000);
        } else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
            updateMessage(`You rolled a "1"! Switching to ${gameData.players[switchPlayer()]}`);
            setTimeout(setUpTurn, 2000);
        } else {
            gameData.scores[gameData.currentPlayer] += gameData.rollSum;
            checkWinningCondition();

            toggleButtons(false); 

            document.querySelector('#rollAgain').addEventListener('click', () => {
                toggleButtons(true); 
                setUpTurn();
            });

            document.querySelector('#pass').addEventListener('click', () => {
                switchPlayer();
                setUpTurn();
            }, { once: true });
        }
    }

    function switchPlayer() {
        gameData.currentPlayer = gameData.currentPlayer === 0 ? 1 : 0;
        return gameData.currentPlayer;
    }

    function checkWinningCondition() {
        if (gameData.scores[gameData.currentPlayer] >= gameData.winningScore) {
            updateMessage(`${gameData.players[gameData.currentPlayer]} wins with ${gameData.scores[gameData.currentPlayer]} points!`);
            document.querySelector('#quit').textContent = 'Start a New Game';
            toggleButtons(false);
        } else {
            updateScore();
        }
    }

    function updateScore() {
        const scoreDisplay = document.querySelector('#score');
        scoreDisplay.innerHTML = `<p>Current score: <strong>${gameData.players[0]}: ${gameData.scores[0]}</strong> | <strong>${gameData.players[1]}: ${gameData.scores[1]}</strong></p>`;
    }

    function updateMessage(message) {
        const playerTurn = document.querySelector('#player-turn');
        playerTurn.textContent = message;
    }

    showInstructions();
});
