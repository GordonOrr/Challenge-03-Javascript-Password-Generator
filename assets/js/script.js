// define user input variables
var characterCount;
var confirmCharacterCount;
var confirmLowerCase;
var confirmUpperCase;
var confirmNumeric;
var confirmSpecialCharacter;

// define character values;
lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
space = [];

// define choices variable
var choices;

// define function to convert lowercase to uppercase
var toUpper = function(x) {
  return x.toUpperCase();
};

// define variable for uppercase conversion
upperCase = lowerCase.map(toUpper);

// Get references to the #generate element
var get = document.querySelector("#generate");

// Add event listener to generate button
get.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});

// Start function to generate password
function generatePassword() {
  // Asks for user input
  characterCount = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  // First if statement for user validation 
  if (!characterCount) {
      alert("This needs a value");
  } else if (characterCount < 8 || characterCount > 128) {
      // Validates user input
      // Start user input prompts
      characterCount = parseInt(prompt("You must choose between 8 and 128"));

  } else {
      // Continues once user input is validated
      confirmLowerCase = confirm("Will this contain Lowercase letters?");
      if (confirmLowerCase) {
        window.alert(lowerCase);
      }
      confirmUpperCase = confirm("Will this contain Uppercase letters?");
      if (confirmUpperCase) {
        window.alert(upperCase);
      }
      confirmNumeric = confirm("Will this contain numbers?");
      if (confirmNumeric) {
        alert(numeric);
      }
      confirmSpecialCharacter = confirm("Will this contain special characters?");
      if (confirmSpecialCharacter) {
        alert(specialCharacter);
      }
  };

  // Else if for 4 negative options
  if (!confirmLowerCase && !confirmUpperCase && !confirmNumeric && !confirmSpecialCharacter) {
    choices = alert("You must choose a criteria!");
  }

  // First if statement that uses user input prompts to determine choices
  // Else if for 4 positive options
  else if (confirmLowerCase && confirmUpperCase && confirmNumeric && confirmSpecialCharacter) {
    choices = lowerCase.concat(upperCase, numeric, specialCharacter);
    alert(choices);
  }

  // Else if for 3 positive options
  else if (confirmLowerCase && confirmUpperCase && confirmNumeric) {
    choices = lowerCase.concat(upperCase, numeric);
  }
  else if (confirmLowerCase && confirmUpperCase && confirmSpecialCharacter) {
    choices = lowerCase.concat(upperCase, specialCharacter);
  }
  else if (confirmLowerCase && confirmNumeric && confirmSpecialCharacter) {
    choices = lowerCase.concat(numeric, specialCharacter);
  }
  else if (confirmUpperCase && confirmNumeric && confirmSpecialCharacter) {
    choices = upperCase.concat(numeric, specialCharacter);
  }

  // Else if for 2 positive options 
  else if (confirmLowerCase && confirmUpperCase) {
    choices = lowerCase.concat(upperCase);

  } else if (confirmLowerCase`` && confirmNumeric) {
    choices = lowerCase.concat(numeric);
  } 
  else if (confirmLowerCase && confirmSpecialCharacter) {
    choices = character.concat(upperCase);
  }
  else if (confirmUpperCase && confirmNumeric) {
    choices = lowerCase.concat(number);
  } 
  else if (confirmUpperCase && confirmSpecialCharacter) {
    choices = upperCase.concat(specialCharacter);
  } 
  else if (confirmNumeric && confirmSpecialCharacter) {
    choices = numeric.concat(specialCharacter);
  }

  // Else if for 1 positive option
  else if (confirmLowerCase) {
    choices = lowerCase;
  }
  else if (confirmNumeric) {
    choices = numeric;
  }
  else if (confirmSpecialCharacter) {
    choices = specialCharacter;
  }
  // Created space variable to fill uppercase conversion
  else if (confirmUpperCase) {
    choices = space.concat(upperCharacter);
  };

  // password variable is an array placeholder for user generated amount of length
  var password = [];

  // Start random selection variables:
  // Random selection for all variables: 
  for (var i = 0; i < characterCount; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  }
  // This joins the password array and converts it to a string
  // Worked with a tutor to incorporate this option
  var ps = password.join("");
  UserInput(ps);
  return ps;
}

// enter password into textbox
function UserInput(ps) {
  document.getElementById("password").textContent = ps;
}