let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let username = document.getElementById("username");
let randomnum = Math.ceil(Math.random() * 100);
let btn = document.getElementById("button");

function checkGuess() {
  let guess = parseInt(userInput.value);
  if (guess > randomnum && guess < 100) {
    gameResult.textContent = "Too High!! " + username.value + " try again..";
    gameResult.style.backgroundColor = "red";
  } else if (guess < randomnum) {
    gameResult.textContent = "Too Low!! " + username.value + " try again..";
    gameResult.style.backgroundColor = "red";
  } else if (guess === randomnum) {
    gameResult.textContent =
      "Congratulations!! " + username.value + ", You got the right number!!";
    gameResult.style.backgroundColor = "green";
    btn.textContent = "Replay";
    btn.style.color = "red";
    btn.style.backgroundColor = "yellow";
  } else {
    gameResult.textContent = "Enter the valid number " + username.value;
    gameResult.style.backgroundColor = "red";
  }
}

function replay() {
  randomnum = Math.ceil(Math.random() * 100);
  gameResult.textContent = "Enter the number " + username.value;
  gameResult.style.backgroundColor = "blue";
  document.getElementById("userInput").value = " ";
}
