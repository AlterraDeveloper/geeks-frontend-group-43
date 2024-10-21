let $phoneNumberInput = document.querySelector("#phone-number");
let $form = $phoneNumberInput.parentElement;
let $submitBtn = $form.querySelector("input[type=submit]");
let $detectionResult = $form.nextElementSibling;

// num % 2 === 0 ? "even" : "odd"
// gender === 2 ? "Э" : "А"

let removeNonDigits = (text) => {
  let result = "";
  for (let char of text) {
    if (char >= "0" && char <= "9") result += char;
  }
  return result;
};

let setOrResetInputLimits = (phoneNumber) => {
  let limit;
  if (phoneNumber.startsWith("0")) {
    limit = 10;
  }
  if (phoneNumber.startsWith("996")) {
    limit = 12;
  }
  if (!limit) {
    $phoneNumberInput.removeAttribute("maxlength");
  } else {
    $phoneNumberInput.setAttribute("maxlength", limit);
  }
};

let canDetectOperator = (phoneNumber) => {
  if (phoneNumber.startsWith("0") && phoneNumber.length >= 4) return true;

  if (phoneNumber.startsWith("996") && phoneNumber.length >= 6) return true;

  return false;
};

$phoneNumberInput.oninput = () => {
  let enteredText = $phoneNumberInput.value;
  //   if (enteredText) {
  //     $submitBtn.style.opacity = "1";
  //   } else {
  //     $submitBtn.style.opacity = "0";
  //   }
  let phoneNumber = removeNonDigits(enteredText);
  $submitBtn.style.opacity = canDetectOperator(phoneNumber) ? "1" : "0";
  $phoneNumberInput.value = phoneNumber;
  setOrResetInputLimits(phoneNumber);
};

function getOperatorCode(phoneNumber) {
  if (phoneNumber.startsWith("0")) return phoneNumber.slice(1, 4);
  if (phoneNumber.startsWith("996")) return phoneNumber.slice(3, 6);
  return "";
}

function detectOperator(phoneNumber) {
  let operatorCode = getOperatorCode(phoneNumber);

  let oshkaCodes = ["700", "701", "702", "500", "501", "502"];
  let beelineCodes = ["770", "771", "772"];
  let megaCodes = ["550", "551", "552"];

  if (oshkaCodes.includes(operatorCode)) return "O!";
  if (beelineCodes.includes(operatorCode)) return "Beeline";
  if (megaCodes.includes(operatorCode)) return "Mega";

  return "";
}

function getOperatorImage(operator) {
  let $img = document.createElement("img");
  switch (operator) {
    case "O!":
      $img.setAttribute("src", "images/oshka.png");
      break;
    case "Beeline":
      $img.setAttribute("src", "images/beeline.jpg");
      break;
    case "Mega":
      $img.setAttribute("src", "images/mega.png");
      break;
    default:
      return null;
  }
  return $img;
}

$form.onsubmit = (event) => {
  event.preventDefault();
  let phoneNumber = $phoneNumberInput.value;
  let operator = detectOperator(phoneNumber);
  let $image = getOperatorImage(operator);
  $detectionResult.innerHTML = "";
  if($image) $detectionResult.append($image);
};

// document.body.addEventListener("contextmenu", (event) => {
//     event.preventDefault();
//     document.body.style.backgroundColor = "red";
// })
