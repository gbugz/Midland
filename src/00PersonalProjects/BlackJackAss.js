class Card {
    constructor(value) {
        this.value = value;
        this.hidden = false;
    }
}

class BlackjackGame {
    constructor() {
        this.dealerCards = [];
        this.playerCards = [];
        this.gameActive = false;

        this.handleHit = this.handleHit.bind(this);
        this.handleStand = this.handleStand.bind(this);
        this.initializeGame = this.initializeGame.bind(this);
        this.setupEventListeners();
    }

    setupEventListeners() {
        const hitButton = document.getElementById('hit-button');
        const standButton = document.getElementById('stand-button');
        const newGameButton = document.getElementById('new-game-button');

        hitButton.addEventListener('click', this.handleHit);
        standButton.addEventListener('click', this.handleStand);
        newGameButton.addEventListener('click', this.initializeGame);
    }

    initializeGame() {
        this.dealerCards = [
            new Card(this.generateCardValue()),
            new Card(this.generateCardValue())
        ];
        this.playerCards = [
            new Card(this.generateCardValue()),
            new Card(this.generateCardValue())
        ];
        
        this.dealerCards[0].hidden = true;
        this.gameActive = true;
        this.updateDisplay();
    }

    generateCardValue() {
        const randomNumber = Math.floor(Math.random() * 13) + 1;
        if (randomNumber > 10) {
            return 10;
        } else if (randomNumber === 1) {
            return 11;
        }
        return randomNumber;
    }

    calculateHand(cards) {
        let sum = 0;
        let aces = 0;

        for (const card of cards) {
            if (card.value === 11) {
                aces++;
            }
            sum += card.value;
        }

        while (sum > 21 && aces > 0) {
            sum -= 10;
            aces--;
        }

        return sum;
    }

    updateDisplay() {
        // Update dealer's cards
        const dealerContainer = document.querySelector('.cards-container');
        dealerContainer.innerHTML = '';
        this.dealerCards.forEach(card => {
            const cardDiv = document.createElement('div');
            cardDiv.className = 'card';
            cardDiv.textContent = card.hidden ? '?' : card.value;
            dealerContainer.appendChild(cardDiv);
        });

        // Update player's cards
        const playerContainer = document.querySelectorAll('.cards-container')[1];
        playerContainer.innerHTML = '';
        this.playerCards.forEach(card => {
            const cardDiv = document.createElement('div');
            cardDiv.className = 'card';
            cardDiv.textContent = card.value;
            playerContainer.appendChild(cardDiv);
        });

        // Update scores
        document.getElementById('dealer-score').textContent = 
            `Dealer Score: ${this.dealerCards[0].hidden ? '?' : this.calculateHand(this.dealerCards)}`;
        document.getElementById('player-score').textContent = 
            `Player Score: ${this.calculateHand(this.playerCards)}`;
    }

    revealDealerCard() {
        this.dealerCards[0].hidden = false;
        this.updateDisplay();
    }

    handleHit() {
        if (!this.gameActive) return;
        this.playerCards.push(new Card(this.generateCardValue()));
        this.updateDisplay();
        const playerScore = this.calculateHand(this.playerCards);
        if (playerScore > 21) {
            this.gameActive = false;
            this.revealDealerCard();
            this.endGame('Bust! Dealer wins!');
        }
    }

    handleStand() {
        if (!this.gameActive) return;
        this.gameActive = false;
        this.revealDealerCard();
        
        while (this.calculateHand(this.dealerCards) < 17) {
            this.dealerCards.push(new Card(this.generateCardValue()));
        }
        this.updateDisplay();
        this.determineWinner();
    }

    determineWinner() {
        const playerScore = this.calculateHand(this.playerCards);
        const dealerScore = this.calculateHand(this.dealerCards);
        
        if (dealerScore > 21) {
            this.endGame('Dealer busts! You win!');
        } else if (playerScore > dealerScore) {
            this.endGame('You win!');
        } else if (dealerScore > playerScore) {
            this.endGame('Dealer wins!');
        } else {
            this.endGame("Push - it's a tie!");
        }
    }

    endGame(message) {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = message;
        messageDiv.style.marginTop = '20px';
        messageDiv.style.fontSize = '24px';
        messageDiv.style.fontWeight = 'bold';
        document.querySelector('.game-container').appendChild(messageDiv);
    }
}

// Initialize the game
const game = new BlackjackGame();