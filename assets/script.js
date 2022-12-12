
const upperCaseSet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lowerCaseSet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numberSet = ["0","1","2","3","4","5","6","7","8","9"]
const symbols = ["!","#","$","%","&","'","(",'"',")","*",",","+","-",".","/",":",";","<","=",">","?","@","[","","]","^","_","`","{","|","}","~"]


function generatePassword() {
 
  charNum = prompt("How long would you like your password to be? (between 8 and 128 characters)");
  if (charNum < 8 || charNum > 128) {
    alert("Password must be between 8 and 128 characters!");
    return;
  } else if (isNaN(charNum)) {
    alert("Invalid entry");
    return;
  }
  else {
    alert("Password length set!");
    
  }
  hasUpperCase = confirm("Include uppwercase letters?");
    if (hasUpperCase) {
      alert("Uppercase letters included.");
    }
    else {
      alert("Uppercase letters will be excluded.");
    }

  hasLowerCase = confirm("Include lowercase letters?");
  if (hasLowerCase) {
    alert("Lowercase letters included.");
  }
  else {
    alert("Lowercase letters will be excluded.");
  }

  hasNumbers = confirm("Include Numbers?");
  if (hasNumbers) {
    alert("Numbers will be included.");
  }
  else {
    alert("Numbers will be excluded.");
  }

  hasSymbols = confirm("Include symbols?");
  if (hasSymbols) {
    alert("Symbols included.");
  }
  else {
    alert("Symbols excluded.");
  }

  if (hasLowerCase === false && hasUpperCase === false && hasNumbers === false && hasSymbols === false) {
    alert("At least one character type must be chosen!");
  };

  var passwordOptions = [];

  if (hasLowerCase) {
    passwordOptions = passwordOptions.concat(lowerCaseSet);
  }
  if (hasUpperCase) {
    passwordOptions = passwordOptions.concat(upperCaseSet);
  }
  if (hasNumbers) {
    passwordOptions = passwordOptions.concat(numberSet);
  }
  if (hasSymbols) {
    passwordOptions = passwordOptions.concat(symbols);
  }

  var password = ""
  for (var i = 0; i < charNum; i++) {
    var randomIndex =[Math.floor(Math.random() * passwordOptions.length)];
    password = password + passwordOptions[randomIndex];
  }
  return password;
};

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
