// document.write("Hello group 43!");
// document.body.style.fontSize = "108px";
// document.body.style.textAlign = "center";
// setInterval(() => {
//   const colors = ["red", "green", "pink", "yellow", "orange", "cyan"];
//   const randIndex = Math.floor(Math.random() * colors.length);
//   document.body.style.backgroundColor = colors[randIndex];
// }, 1000);

/*
Lesson 1
Teacher: Eugene Kiselev
Subject: JavaScript Basics
*/

// variable - переменная

// string
let candidateName1 = "Oroz Alykulov";
let candidateName2 = "Yrys Kulov";
let candidateName3 = "Samat Moldokulov";

let electionTitle = "Local kenesh 2024";

// number
let votersCount = 150_000;
let comingVotersCount = 12_000;
let comingVotersPercentage = (comingVotersCount * 100) / votersCount;

console.log(electionTitle + " coming " + comingVotersPercentage + "%");

let candidateVotesCount1 = 43_000;
let candidateVotesCount2 = 25_000;
let candidateVotesCount3 = 27_000;

let votesSum =
  candidateVotesCount1 + candidateVotesCount2 + candidateVotesCount3;

// boolean
let electionIsOk = comingVotersCount > votesSum;

// conditions - условия
if (electionIsOk) {
  console.log(electionTitle + " finished successfully");
} else {
  console.error(electionTitle + " fails.");
}

console.log("Voters: " + comingVotersCount);
console.log("Votes: " + votesSum);

// camelCase: comingVotersCount
// snake_case: coming_voters_count

if (comingVotersPercentage > 50) {
  console.log("Election OK");
} else {
  console.warn("Election fails. Low coming.");
}
