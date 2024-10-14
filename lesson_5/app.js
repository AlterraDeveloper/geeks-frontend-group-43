// DOM - Document Object Model

// selector

// search elements

let $counter = document.getElementsByClassName("counter")[0];
let $redButton = document.getElementById("decrease");
let $resetButton = document.getElementsByTagName("button")[1];
let $greenButton = document.querySelector("#increase");

function decreaseCounter() {
  let counterValue = $counter.innerText;
  counterValue--;
  $counter.innerText = counterValue;
  setCounterColor();
}

$redButton.addEventListener("click", decreaseCounter);

// function declaration
function resetCounter() {
  $counter.innerText = 0;
  setCounterColor();
}

$resetButton.addEventListener("click", resetCounter);

// function expression
let increaseCounter = function () {
  let counterValue = $counter.innerText;
  counterValue++;
  $counter.innerText = counterValue;
  setCounterColor();
};

// let resultFunc = increaseCounter();
// console.log("result = ", resultFunc);

$greenButton.onclick = increaseCounter;

function setCounterColor() {
  let counterValue = $counter.textContent;
  if (counterValue > 0) {
    $counter.style.color = "#0a9e23"; // green color
  } else if (counterValue < 0) {
    $counter.style.color = "red";
  } else {
    $counter.style.color = "cyan";
  }
}
