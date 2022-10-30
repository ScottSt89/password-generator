var characterLength = 8;
var selectionArr = [];
var specialCharArr = [
  " ",
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  "-",
  ",",
  ".",
  "/",
  ":",
  ";",
  "<",
  ">",
  "=",
  "?",
  "@",
  "[",
  "]",
  ",",
  "|",
  "(",
  "^",
  ")",
  "_",
  "`",
  "{",
  "}",
  "~",
];
var lowerCaseArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCaseArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * selectionArr.length);
    password = password + selectionArr[randomIndex];
  }
  return password;
}

function getPrompts() {
  selectionArr = [];
  characterLength = parseInt(
    prompt(
      "How many characters would you like your password to be? (minimum 8 characters, maximum 128 characters"
    )
  );

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert(
      "Character length has to be a number, 8 - 128 characters. Please try again."
    );
    return false;
  }

  if (confirm("Would you like lowercase letters included in your password?")) {
    selectionArr = selectionArr.concat(lowerCaseArr);
  }

  if (confirm("Would you like uppercase letters included in your password?")) {
    selectionArr = selectionArr.concat(upperCaseArr);
  }

  if (confirm("Would you like special characters included in your password?")) {
    selectionArr = selectionArr.concat(specialCharArr);
  }

  if (confirm("Would you like numbers included in your password?")) {
    selectionArr = selectionArr.concat(numberArr);
  }
  return true;
}
