document.addEventListener('DOMContentLoaded', function() {
let para = document.getElementById('para');
let btn = document.getElementById('btn');
let input = document.getElementById('usr_inp');

let min = 1;
let max = 100;
let guess;
let attempt = 0;
let ans = Math.floor(Math.random() * (max - min + 1) + min);
para.innerHTML = `Guess a number between ${min} - ${max}`

function game(){
    let usr_input = Number(input.value);
    input.innerHTML = '';
    if(isNaN(usr_input)){
        para.innerHTML = 'Please enter a valid number!';
    }else if(usr_input < min || usr_input > max){
        para.innerHTML = `Please enter a valid number! Between ${min} - ${max}`;
    }else{
        guess = usr_input;
        attempt++;
        if(guess < ans){
            para.innerHTML = 'Too low! try again';
        }else if(guess > ans){
            para.innerHTML = 'Too high! try again';
        }else{
            para.innerHTML = `Correct answer you took ${attempt} attempts.Refresh the page  to start a new game.`;
            };
    }};

    btn.addEventListener('click',game);
})


