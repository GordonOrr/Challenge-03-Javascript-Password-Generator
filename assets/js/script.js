// define user input variables and derivatives
var characterCount;
var confirmCharacterCount;
var confirmLowercase;
var confirmUppercase;
var confirmNumeric;
var confirmSpecial;

// define character values using complete ASCII Character Set containing 128 characters
lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
special = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
space = [];

// define variable to hold all user-selected characters 
var selectedCharacters;

// get references to the #generate element
var get = document.querySelector("#generate");

// add event listener to generate button
get.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});

// define function to confirm character types
var confirmCharacterTypes = function() {
  // confirm user input - lowercase characters
  confirmLowercase = confirm("Should the password contain lowercase characters?");
  if (confirmLowercase) {
    // window.alert(lowercase);
  }
  // confirm user input - uppercase characters  
  confirmUppercase = confirm("Should the password contain uppercase characters?");
  if (confirmUppercase) {
    // window.alert(uppercase);
  }
  // confirm user input - numeric characters
  confirmNumeric = confirm("Should the password contain numbers?");
  if (confirmNumeric) {
    // alert(numeric);
  }
  // confirm user input - special characters
  confirmSpecial = confirm("Should the password contain special characters?");
  if (confirmSpecial) {
    // alert(special);
  }
}

// define function to query for user input and then generate password
var generatePassword = function() {
  // query user for number of characters in requested password
  characterCount = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  // 'if' the user did not input a value, alert user and run function again.
  if (!characterCount) {
      alert("You must provide a numeric value. Please try again.");
      return generatePassword();
  } 
  // 'else if' validate user input - number of characters are outside defined range
  else if (characterCount < 8 || characterCount > 128) {
      alert("You must choose between 8 and 128. Please try again.");
      return generatePassword();
  }
  // 'else' run function - 'confirmCharacterTypes'
  else {
    confirmCharacterTypes()
  };

  // if no character type selected, alert user and run 'confirmCharacterTypes' function again
  if (!confirmLowercase && !confirmUppercase && !confirmNumeric && !confirmSpecial) {
    selectedCharacters = alert("You must choose a criteria! Please try again.");
    return generatePassword();
  }
  // series of 'else if' statements to build 'selectedCharacters' from selected characters types
  // 'else if' for 4 positive selections - lowercase, uppercase, numeric, special
  else if (confirmLowercase && confirmUppercase && confirmNumeric && confirmSpecial) {
    selectedCharacters = lowercase.concat(uppercase, numeric, special);
    // alert(selectedCharacters);
  }
  // 'else if' for 3 positive selections - lowercase, uppercase, numeric
  else if (confirmLowercase && confirmUppercase && confirmNumeric) {
    selectedCharacters = lowercase.concat(uppercase, numeric);
    // alert(selectedCharacters);
  }
  // 'else if' for 3 positive selections - lowercase, uppercase, special
  else if (confirmLowercase && confirmUppercase && confirmSpecial) {
    selectedCharacters = lowercase.concat(uppercase, special);
    // alert(selectedCharacters);
  }
  // 'else if' for 3 positive selections - lowercase, numeric, special
  else if (confirmLowercase && confirmNumeric && confirmSpecial) {
    selectedCharacters = lowercase.concat(numeric, special);
    // alert(selectedCharacters);
  }
  // 'else if' for 3 positive selections - uppercase, numeric, special
  else if (confirmUppercase && confirmNumeric && confirmSpecial) {
    selectedCharacters = uppercase.concat(numeric, special);
    // alert(selectedCharacters);
  }
  // 'else if' for 2 positive selections - lowercase, uppercase 
  else if (confirmLowercase && confirmUppercase) {
    selectedCharacters = lowercase.concat(uppercase);
    // alert(selectedCharacters);
  } 
  // 'else if' for 2 positive selections - lowercase, numeric
  else if (confirmLowercase && confirmNumeric) {
    selectedCharacters = lowercase.concat(numeric);
    // alert(selectedCharacters);
  } 
  // 'else if' for 2 positive selections - lowercase, special
  else if (confirmLowercase && confirmSpecial) {
    selectedCharacters = lowercase.concat(special);
    // alert(selectedCharacters);
  }
  // 'else if' for 2 positive selections - uppercase, numeric
  else if (confirmUppercase && confirmNumeric) {
    selectedCharacters = uppercase.concat(numeric);
    // alert(selectedCharacters);
  } 
  // 'else if' for 2 positive selections - uppercase, special
  else if (confirmUppercase && confirmSpecial) {
    selectedCharacters = uppercase.concat(special);
    // alert(selectedCharacters);
  } 
  // 'else if' for 2 positive selections - numeric, special
  else if (confirmNumeric && confirmSpecial) {
    selectedCharacters = numeric.concat(special);
    // alert(selectedCharacters);
  }
  // 'else if' for 1 positive selection - lowercase
  else if (confirmLowercase) {
    selectedCharacters = lowercase;    
    // alert(selectedCharacters);
  }
  // 'else if' for 1 positive selection - uppercase
  else if (confirmUppercase) {
    selectedCharacters = uppercase;
    // alert(selectedCharacters);
  }
  // 'else if' for 1 positive selection - numeric
  else if (confirmNumeric) {
    selectedCharacters = numeric;
    // alert(selectedCharacters);
  }
  // 'else if' for 1 positive selection - spceial
  else if (confirmSpecial) {
    selectedCharacters = special;
    // alert(selectedCharacters);
  }
  // 'else' the process failed unexpectedly. Alert user and run 'generatePassword' again.
  else {
    alert("The process failed. Please start again.")
    return generatePassword();

  };

  // password variable is an array placeholder for user generated amount of length
  var password = [];

  // random selection of characters
  for (var i = 0; i < characterCount; i++) {
    var randomCharacters = selectedCharacters[Math.floor(Math.random() * selectedCharacters.length)];
    password.push(randomCharacters);
  }
  // alert(password);

  // join the password array and convert it to a string
  var ps = password.join("");
  UserInput(ps);
  return ps;
}

// define function to enter password into textbox
function UserInput(ps) {
  document.getElementById("password").textContent = ps;
}