// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = "abcdefghijklmnopqrstuvwxyz";

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var numericChar = "1234567890";

var specialChar = " !'#$%&()*+,-./:;<=>?@[\]^_`{|}~"+'"';

var randomNum = function(min, max) {
  value = Math.floor(Math.random() * (max - min + 1));
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

var confirmLowerCase = window.confirm("Would you like to include lowercase characters?");

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
