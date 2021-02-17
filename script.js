const game = () =>{
    let pScore = 0
    let cScore = 0
    

    const startGame =()=>{
        const playBtn = document.getElementById('lPlay')
        const introScreen = document.querySelector('.welcomeScreen')
        const playScreen = document.querySelector('.playScreen')

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('hide');
            playScreen.classList.add('show');
        });
    };

    const playGame = () => {
        const options = document.querySelectorAll('.playButtons button');
        const playerHand = document.querySelector('.playerHand');
        const computerHand = document.querySelector('.computerHand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach((hand) => {
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            });
        });

        const comOptions = [
            'rock',
            'paper',
            'scissors'
        ];

        options.forEach((option)=>{
            option.addEventListener('click', function(){
                const comNumber = Math.floor(Math.random() * 3);
                const comChoice = comOptions[comNumber];
                setTimeout(() => {
                    compareHands(this.textContent, comChoice)
                playerHand.src = `./assets/${this.textContent}.png`
                computerHand.src = `./assets/${comChoice}.png`
                }, 2000)

                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    }

    const updateScore = () => {
        const playerScore = document.querySelector('.playerScore p');
        const comScore = document.querySelector('.computerScore p');
        playerScore.textContent = pScore;
        comScore.textContent = cScore;
    }
    const compareHands = (playerChoice, comChoice) => {
        const winner = document.querySelector('.winner')
        if(playerChoice === comChoice) {
            winner.textContent = 'It is a tie';
            return;
        }
        if(playerChoice === 'rock'){
            if(comChoice === 'scissors'){
                winner.textContent = 'You Win!'
                pScore++
                updateScore();
                return;
            } else{
                winner.textContent = 'Computer Wins!'
                cScore++
                updateScore();
                return;
            }
        }
        if(playerChoice === 'paper'){
            if(comChoice === 'scissors'){
                winner.textContent = 'Computer Wins!'
                cScore++
                updateScore();
                return;
            } else{
                winner.textContent = 'You Win!'
                pScore++
                updateScore();
                return;
            }
        }
        if(playerChoice === 'scissors'){
            if(comChoice === 'paper'){
                winner.textContent = 'You Win!'
                pScore++
                updateScore();
                return;
            } else{
                winner.textContent = 'Computer Wins!'
                cScore++
                updateScore();
                return;
            }
        }
    }
    startGame();
    playGame();
}

game();