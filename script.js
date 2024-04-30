// to acces the web page element 

let score0 = document.getElementById('score--0');
let score1 = document.getElementById('score--1');
let dice = document.querySelector('.dice')
let rollDice = document.querySelector('.btn--roll');
let current1 = document.getElementById('current--0');
let current2 = document.getElementById('current--2');
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');
let holdBtn = document.querySelector('.btn--hold');
let newGame = document.querySelector('.btn--new');
let name1 = document.getElementById('name--0');
let name2 = document.getElementById('name--1');

//initialize the value to 0
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

let scores = [0,0];
let current = 0;
let activeplayer = 0;



let switchPlayer = function(){
    current = 0;
    document.getElementById(`current--${activeplayer}`).textContent = current;
    activeplayer = activeplayer ===0? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}

//Implement functionalities for roll dice button
rollDice.addEventListener('click', function(){
    //1. generate a random nember from 1 to 6
    let diceNumber = Math.trunc(Math.random() * 6) + 1;
    console.log(diceNumber);
    //2.display the dice image with the random number
    dice.classList.remove('hidden');
    dice.scr = `images/dice-${diceNumber}.jpg`;
    //if the random number is not 1 then add it to active players current score
    if ( diceNumber !=1){
        current += diceNumber;
        document.getElementById(`current--${activeplayer}`).textContent = current;
        //current1.textContent = current;
    }else{
        switchPlayer();
    }
    
});

//implementing hold button functionalities
holdBtn.addEventListener('click', function(){
    //1add current score to global score
    scores[activeplayer] += current;
    document.getElementById(`score--${activeplayer}`).textContent = scores[activeplayer];

    //2.checked if the player has already reached the maximum score
    if(scores[activeplayer] >=30 ){
        //finish the game
        document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
        document.getElementById(`name--${activeplayer}`).textContent = 'Winner!';
        //hide dice image
        dice.classList.add('hidden');
        rollDice.classList.add('hidden');
        holdBtn.classList.add('hidden');

    }else{
        switchPlayer();
    }
});

//start new Game

newGame.addEventListener('click', function(){
    score0.textContent = 0;
    score1.textContent = 0;
    current1.textContent = 0;
    current2.textContent = 0;

    name1.textContent = "Player 1";
    name2.textContent = "Player 2";
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
    rollDice.classList.remove('hidden');
    holdBtn.classList.remove('hidden');

    scores = [0,0];
    current = 0;
    activeplayer = 0;
});