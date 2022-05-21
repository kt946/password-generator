// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase =  [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",  "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numericChar = ["0", "1", "2", "3","4", "5", "6", "7", "8", "9"];

var specialChar = [ ' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];

var randomNum = function(min, max) {
  value = Math.floor(Math.random() * (max - min + 1)) + min;
  return value;
};

// function to input length of password
var getLengthPw = function () {
  // ask user for password length
  var lengthInput = window.prompt("Specify the length of your password. It must be at least 8 characters and no more than 128 characters.");
  
      if (lengthInput > 8 && lengthInput < 128) {
          return lengthInput;
      }
      // if user input a blank or special character or length did not fit requirements
      else {
          window.alert("You did not input a valid length! Please try again!");
          getLengthPw();
      }
  };


function generatePassword() {
  // add your logic here

  // Prompt user for the length of the password (8 - 128)
  // Prompt user if they want to include lowercase characters
  // Prompt user if they want to include uppercase characters
  // Prompt user if they want to include numeric characters
  // Prompt user if they want to include special characters
  // Validate input (between 8 - 128 characters, at least one type must be selected)
  // Generate password

  // Display password to the page
  
  return;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
