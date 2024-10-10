console.log("lesson 3");

// string
// number
// boolean
// undefined
// null
// object
// bigint
// symbol

let me = {
  name: "Eugene",
  surname: "Kiselev",
  job: "LogiSense",
  position: "FullStack developer",
  experience: 7,
  extraJob: "Geeks courses",
  extraHours: 4,
  passport: {
    series: "ID",
    no: "123456",
    inn: "123156465484",
    isExpired: false,
  },
};
me.name = "Vadim";
me.fatherName = "Dmitrievich";
delete me.surname;

me.companyName = me.job;
delete me.job;

console.log(me);

// V8 - JavaScript Engine
// case-sensitive

let apple = 10;
let Apple = 10;

apple += 10;

console.log(Apple); // 10

// Arrays - массивы

let products = ["adidas shoes", "nike t-shirt", "puma sport suite"];

let students = ["Anvar", "Anya", "Belek"];
//                 0        1        2
console.log("Students:", students.length);

students.push("Umar");
students.push("Anton");

console.log("Students:", students.length);

let transactions = [45_000, -5000, -1000, 4000, -500, -7000, -3000, 10_000];
console.log("Transactions count:", transactions.length);

let incomes = 0;
let expenses = 0;

// for..of
for (let transaction of transactions) {
  if (transaction > 0) {
    incomes += transaction;
  } else {
    expenses += transaction;
  }
}

console.log("Bank Statement");
console.log("Incomes:", incomes, "Expenses:", Math.abs(expenses));

let children = [2010, 2015, 2018, 2020, 2014, 2023, 2009, 2004, 1995];
let giftsCount = 0;

for (let year of children) {
  let childAge = 2024 - year;
  if (childAge >= 6 && childAge <= 11) {
    giftsCount++;
  }
}

console.log(giftsCount + " children of " + children.length + " gets gift");

// Indexing - индексация

let userName = "Eugene";
let userSurname = "Kiselev";
let userFatherName = "Dmitrievich";

let mbankName = userName + " " + userSurname[0] + ".";
let contractName =
  userSurname + " " + userName[0] + "." + userFatherName[0] + ".";

console.log("Mbank:", mbankName);
console.log("Contract:", contractName);

// EuGeNe MeTaLiSt

let myUsername = "alterradeveloper";
let editedUserName = "";
for (let i = 0; i < myUsername.length; i++) {
  let char = myUsername[i];
  if (i % 2 === 0) {
    editedUserName += char.toUpperCase();
  } else {
    editedUserName += "*";
  }
}

console.log(myUsername, " -> ", editedUserName);

//
for (let i = 1; i <= 12; i++) {
  let monthName;

  if (i === 1) monthName = "January";
  else if (i === 2) monthName = "February";
  else if (i === 3) monthName = "March";
  else if (i === 4) monthName = "April";
  else if (i === 5) monthName = "May";
  else if (i === 6) monthName = "June";
  else if (i === 7) monthName = "July";
  else if (i === 8) monthName = "August";
  else if (i === 9) monthName = "September";
  else if (i === 10) monthName = "October";
  else if (i === 11) monthName = "November";
  else if (i === 12) monthName = "December";

  let season;

  switch (monthName) {
    case "December":
    case "January":
    case "February":
      season = "❄️";
      break;
    case "March":
    case "April":
    case "May":
      season = "🌺";
      break;
    case "June":
    case "July":
    case "August":
      season = "🌞";
      break;
    case "September":
    case "October":
    case "November":
      season = "🍁";
      break;
  }

  console.log(monthName + " " + season);
}
