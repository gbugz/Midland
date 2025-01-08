let cards = []

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
        const hitButton = document.getElementById('hit');
        const standButton = document.getElementById('stand');
        const newGameButton = document.getElementById('newGame');
        hitButton.addEventListener('click', this.handleHit);
        standButton.addEventListener('click', this.handleStand);
        newGameButton.addEventListener('click', this.initializeGame);
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
            this.endGame('Push - it\'s a tie!');
        }
    }
    endGame(message) {
        let messageDiv = document.getElementById('game-message');
        if (!messageDiv) {
            messageDiv = document.createElement('div');
            messageDiv.id = 'game-message';
            document.getElementById('game-container').appendChild(messageDiv);
        }
        messageDiv.textContent = message;
    }

    dealCards() {
        let randomNumber = Math.floor ( Math.random()*13)+1
        if(radnomNumber >10) {
            return 10
        }
        else if (randomNumber === 1) {
            return 11}
        else {
            return randomNumber
        }
    }
}