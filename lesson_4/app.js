/**
 * Функция для округления числа с учетом знаков после запятой
 * @param {*} num число для округления
 * @param {*} points количество знаков после запятой
 * @returns округленное число
 */
function roundWithPoints(num, points) {
  // 100.5478 2
  num = num * Math.pow(10, points); // 100.5478 * 100 = 10054.78
  num = Math.round(num); // 10055
  num = num / Math.pow(10, points); // 10055 / 100 = 100.55
  return num;
}

// let num1 = Number(prompt("num1"));
// let num2 = Number(prompt("num2"));

// console.log(typeof num1, typeof num2);

// if (num1 > num2) {
//   console.log(num1, " > ", num2);
// } else if (num2 > num1) {
//   console.log(num2, " > ", num1);
// } else {
//   console.log(num1, "equals", num2);
// }

// unary
// binary
// ternary

// NaN Not a Number

// let planetId = prompt("planet");

// if (planetId === 1) {
//   console.log("mercury");
// } else if (planetId === 2) {
//   console.log("venus");
// } else if (planetId === 3) {
//   console.log("earth");
// } else {
//   console.error("ERROR");
// }

// switch (Number(planetId)) {
//   case 1:
//     console.log("Mercury");
//     break;
//   case 2:
//     console.log("Venus");
//     break;
//   case 3:
//     console.log("Earth");
//     break;
//   default:
//     console.error("ERROR");
// }

// functions

console.log(roundWithPoints(100.5478, 2));
console.log(roundWithPoints(100.5478, 3)); // 100.548

function sum(num1, num2) {
  return num1 + num2;
}

console.log("5 + 2 = ", sum(5, 2));

function setTabTitle() {
  document.title = "GEEKS";
}

setTabTitle();

// DRY - Don't repeat yourself

function removeLast2Digits(text) {
  return String(text).slice(0, -2);
}

function getBonuses(amount) {
  //   let hundreds = String(amount).slice(0, -2);
  let hundreds = removeLast2Digits(amount);

  if (amount >= 800 && amount <= 1999) {
    return Number(hundreds);
  } else if (amount >= 2000 && amount <= 4999) {
    return Number(hundreds) * 2;
  } else if (amount >= 5000) {
    return Number(hundreds) * 3;
  }
  return 0;
}

console.log("1x test. 930 = ", getBonuses(930));
console.log("2x test. 2250 = ", getBonuses(2250));
console.log("3x test. 5922 = ", getBonuses(5922));
console.log("0x test. 450 = ", getBonuses(450));




