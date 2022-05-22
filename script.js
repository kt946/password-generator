// Assignment Code
var generateBtn = document.querySelector("#generate");

// object for password data
var passwordInfo = [
  {
    type: "lowercase",
    characters: "abcdefghijklmnopqrstuvwxyz"
  }, 
  {
    type: "uppercase",
    characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  },
  {
    type: "numeric",
    characters: "1234567890"
  },
  {
    type: "special",
    characters: " !'#$%&()*+,-./:;<=>?@[\\]^_`{|}~"+'"'
  }
];

// function to input length of password
var getLength = function () {
  // ask user for password length
  var lengthInput = window.prompt("Enter the length of your password. It must be at least 8 characters and no more than 128 characters.");

  if (lengthInput >= 8 && lengthInput <= 128) {
    passwordLength = lengthInput;
  }
  // if user input a blank or special character or length did not fit requirements
  else {
    window.alert("You did not input a valid length! Please try again!");
    getLength();
  }
};

// function to ask for types of characters
var getCharacterType = function() {
  for (var i = 0; i < passwordInfo.length; i++) {
    var data = passwordInfo[i]
    var confirmType = window.confirm("Would you like to include " + data.type + " characters?");
    if (confirmType) {
      passwordString += data.characters;
    }
  }
  // Validate input (at least one type must be selected)
  if (passwordString.length === 0) {
    window.alert("You need to select at least one character type to proceed.")
    getCharacterType();
  }
};

// function for generating password based on user input
var getNewPassword = function() {
  for (var i = 0; i < passwordLength; i ++ ) {
    var randomNum = Math.floor(Math.random() * passwordString.length);
    newPassword += passwordString[randomNum];
  }
};

//function to reset variables
var reset = function() {
  passwordLength = "";
  passwordString = "";
  newPassword = "";
};

function generatePassword() {
  // add your logic here

  // reset variables for new password
  reset();
  
  // Prompt user for the length of the password (8 - 128)
  getLength();

  // Prompt user if they want to include lowercase, upper, numeric, and/or special characters
  getCharacterType();

  // Generate password based on length and selected characters
  getNewPassword();

  // Display password to the page
  return newPassword;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
