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

// var specialCharArr = [" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~""];
// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  getPrompts();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {}

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

// min-value = 8; max-value = 128;
