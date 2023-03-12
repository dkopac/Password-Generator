// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const symbols = ".,/;'[]-=~!@#$%^&*()_+:{}|";

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
// password needs to be between 8 and 128 chars
// it CAN contain lowercase, uppercase, symbols and no
// we need to allow the user to choose what character they want
// if they don't choose any type of chars they will get an alert
// if everything goes to plan, we generate the random password
