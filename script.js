"use strict";


let secretnumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let a = 0;
let highscore = 0;

document.querySelector(".number").textContent = "?";
document.querySelector(".check").addEventListener("click", () => {
          const guess = document.querySelector(".guesss").value;
          console.log(guess);
          if (score > 1) {

               if (!guess) {
                    document.querySelector(".message").textContent = "Guess Something";
               } else if (guess == secretnumber) {
                    
                    document.querySelector(".message").textContent = "🎉🪘HURRAY ! You Win";
                    document.querySelector('body').style.backgroundColor = '#00cc00';
                    document.querySelector('.number').style.width = "30rem";
                    document.querySelector(".number").textContent = secretnumber;
                    if(score>highscore){
                    highscore = score;
                    document.querySelector('.highscore').textContent = highscore;
                    }


               } else if (guess > secretnumber) {
                    document.querySelector(".message").textContent = "📈 Too High";
                    score--;
                    document.querySelector(".score").textContent = score;
               } else if (guess < secretnumber) {
                    document.querySelector(".message").textContent = "📉Too Low";
                    score--;
                    document.querySelector(".score").textContent = score;
               }
          } else {
               document.querySelector(".score").textContent = 0;
               document.querySelector('.message').textContent = '💥You Lost The Game ';
               document.querySelector('body').style.backgroundColor = '#e62e00';
          }
     });


document.querySelector('.again').addEventListener('click' , () => {
     secretnumber = Math.floor(Math.random() * 20) + 1;
     score=20;
     document.querySelector(".number").textContent = "?";
     document.querySelector(".message").textContent =' Start guessing...';
     document.querySelector(".score").value = score;
     document.querySelector(".score").textContent = 20;
     document.querySelector(".guesss").value = '';
     document.querySelector('body').style.backgroundColor = '#222';
     });
