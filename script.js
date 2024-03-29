// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var arrlowerCase = lowerCase.split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var arrupperCase = upperCase.split("");
var numbers = "1234567890";
var symbols = ".,/;'[]-=~!@#$%^&*()_+:{}|";
var finalPassword = [];

function generatePassword() {
  // ask the user for the password length
  var passwordLength = prompt(
    "How Long is your Password? length between 8-128"
  );
  // check if password is an integer. if not, I'll convert it to an integer
  passwordLength = parseInt(passwordLength, 10);
  // I need to check the length
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a number between 8 and 128 chars");
  }

  var isLowerCase = confirm("Do you want lowercase letters?");
  var isUpperCase = confirm("Do you want uppercase letters?");
  var isNumbers = confirm("Do you want numbers?");
  var isSymbols = confirm("Do you want symbols?");

  if (isLowerCase) {
    finalPassword.push(...lowerCase);
  }
  if (isUpperCase) {
    finalPassword.push(...upperCase);
  }
  if (isNumbers) {
    finalPassword.push(...numbers);
  }
  if (isSymbols) {
    finalPassword.push(...symbols);
  }

  if (!isLowerCase && !isUpperCase && !isNumbers && !isSymbols) {
    alert("please use at least one type of characters");
  }
  var s = "";
  for (var i = 0; i < passwordLength; i++) {
    var rand = Math.floor(Math.random() * finalPassword.length);
    s = s + finalPassword[rand];
  }
  console.log(s);
  return s;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// password generator
