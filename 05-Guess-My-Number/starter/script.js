"use strict";

// aqui eu uso o selector pra manipular a classe do HTML
// usando o textContent retorno apenas o valor
//console.log(DisplayText(".message"));

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// só gera de 0 a 19

let score = 20;
let highscore = 0;

const DisplayText = function (elem, content) {
  document.querySelector(elem).textContent = content;
}

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  DisplayText(".score", score);
  DisplayText(".message", "Start guessing...");
  DisplayText(".number", "?");
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#22000e";
  document.querySelector(".guess").value = "";
  secretNumber = Math.trunc(Math.random() * 20) + 1;

});

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //guess is incorrect
  if (guess == false) {
    DisplayText(".message", "Enter a valid number");
  }
  else if (guess !== secretNumber) {
    if (score > 1) {
      DisplayText(".message", guess > secretNumber ? "🥶 Too high!" : "🥵 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    }
    else {
      DisplayText(".message", "💀 You lost the game... 💀 ");
      document.querySelector(".score").textContent = 0;
    }
  }

  // guess correctly
  else if (guess === secretNumber) {
    DisplayText(".number", secretNumber);
    DisplayText(".message", "Congratulations 👾🎉");
    document.querySelector("body").style.backgroundColor = "#66a580";
    document.querySelector(".number").style.width = "45rem";
    if (score > highscore) {
      highscore = score;
      DisplayText(".highscore", score);
    }
  }
});

