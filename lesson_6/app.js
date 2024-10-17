let $app = document.querySelector("#container");

function createCell() {
  let div = document.createElement("div"); // <div></div>
  // div.className = "square"; // <div class="square"></div>
  div.classList.add("square"); // <div class="square"></div>
  return div;
}

// arrow function
let getColor = () => {
    let colors = ["red", "yellow", "orange", "purple", "lime", "blue"];
    let randIndex = Math.round(Math.random() * colors.length) - 1;
    return colors[randIndex];
}

function turnOn(event) {
  let cell = event.target;
  // cell.style.backgroundColor = getColor();
  cell.style.backgroundColor = chroma.random();
}

let turnOff = function (event) {
  let cell = event.target;
  cell.style.backgroundColor = "#1d1d1d";
};

for (let i = 0; i < 500; i++) {
  //   $app.innerHTML += '<div class="square"></div>'; // escaping
  let newCell = createCell();

  newCell.onmouseover = turnOn;
  newCell.addEventListener("mouseleave", turnOff);

  $app.append(newCell);
}

