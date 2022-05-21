// Assignment Code
var generateBtn = document.querySelector("#generate");

lowerCase = "abcdefghijklmnopqrstuvwxyz";

upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

anumericChar = "1234567890";

specialChar = " !'#$%&()*+,-./:;<=>?@[]^_`{|}~"+'"';

var getNewPassword = function() {
    for (var i = 0; i < passwordLength; i ++ ) {
        value = Math.floor(Math.random() * passwordArray.length);
        newPassword += passwordArray[value];
    }
    return newPassword;
};

// function to input length of password
var getLengthPw = function () {
  // ask user for password length
  var lengthInput = window.prompt("Specify the length of your password. It must be at least 8 characters and no more than 128 characters.");
    if (lengthInput >= 8 && lengthInput <= 128) {
        return lengthInput;
    }
    // if user input a blank or special character or length did not fit requirements
    else {
        window.alert("You did not input a valid length! Please try again!");
        getLengthPw();
    }
  };

// function to ask for lowercase characters
var addLowerCase = function() {
  var confirmLowerCase = window.confirm("Would you like to include lowercase characters?");
    if (confirmLowerCase) {
      passwordArray += lowerCase;
    }
};

// function to ask for uppercase characters
var addUpperCase = function() {
  var confirmUpperCase = window.confirm("Would you like to include uppercase characters?");
    if (confirmUpperCase) {
      passwordArray += upperCase;
    }
};

// function to ask for numeric characters
var addNumChar = function() {
  var confirmNumChar = window.confirm("Would you like to include numeric characters?");
    if (confirmNumChar) {
      passwordArray += numericChar;
    }
};

// function to ask for special characters
var addSpecialChar = function() {
  var confirmSpecialChar = window.confirm("Would you like to include special characters?");
    if (confirmNumChar) {
      passwordArray += specialChar;
    }
};

// condition if none of the critera were selected
if (passwordArray === "") {
  window.alert("You need to select at least one character type to proceed.")
}

function generatePassword() {
  // add your logic here
  passwordLength = "";
  passwordArray = "";
  newPassword = "";

  // Prompt user for the length of the password (8 - 128)
  getLengthPw();
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
