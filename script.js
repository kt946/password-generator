// Assignment Code
var generateBtn = document.querySelector("#generate");

passwordLength = "";
passwordArray = "";
newPassword = "";
passwordInfo = [
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
  var lengthInput = window.prompt("Specify the length of your password. It must be at least 8 characters and no more than 128 characters.");

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
    var criteria = passwordInfo[i]
    var confirmType = window.confirm("Would you like to include " + criteria.type + " characters?");
    if (confirmType) {
      passwordArray += criteria.characters;
    }
  }
  // Validate input (at least one type must be selected)
  if (passwordArray === "") {
    window.alert("You need to select at least one character type to proceed.")
    generatePassword();
  }
};

var getNewPassword = function() {
  for (var i = 0; i < passwordLength; i ++ ) {
    randomNum = Math.floor(Math.random() * passwordArray.length);
    newPassword += passwordArray[randomNum];
  }
  return newPassword;
};

function generatePassword() {
  // add your logic here
  // reset variables for new password
  passwordLength = "";
  passwordArray = "";
  newPassword = "";

  // Prompt user for the length of the password (8 - 128)
  getLength();
  // Prompt user if they want to include lowercase, upper, numeric , and/or special characters
  getCharacterType();
  newPassword = getNewPassword();
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
