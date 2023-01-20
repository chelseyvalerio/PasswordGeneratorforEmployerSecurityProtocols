// Assignment Code
var generateBtn = document.querySelector("#generate");

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

 passwordText.value = password;

}

let password = writePassword;

 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);

 var userChoice = (Math.floor(Math.random() <= 128) + 8); //I know this needs adjusting but wasn't able to figure out how before assignment was due. 
 var uppercasecharacters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
 var lowercasecharacters = ["abcdefghijklmnopqrstuvwxyz"];
 var numcharacters = ["0123456789"];
 var specharacters = ["!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]; 
 var index = userChoice;
 
  function generatePassword() {
     var generateBtn = window.prompt("How many total characters would you like your password to be?", userChoice.index);
 console.log(index);
 var addUpperCase = confirm("Do you want to use uppercase characters?"); // user choice value T or F;
   console.log(addUpperCase);
 var addLowerCase = confirm("Do you want to use lowercase characters?"); // user choice value T or F;
   console.log(addLowerCase);
 var addNumCharacters = confirm("Would you like to use numerical characters?"); // user choice value T or F;
   console.log(addNumCharacters);
 var addSpeCharacters = confirm("Would you like to use special characters?"); // user choice value T or F;
   console.log(addSpeCharacters);
 
  if (userChoice === true) {
    let (index = userChoice.math.random.length-1);
    console.log(index);
     window.confirm(addUpperCase, uppercasecharacters.length);
     window.confirm(addLowerCase, lowercasecharacters.length);
     window.confirm (addNumCharacters, numcharacters.length);
     window.confirm (addSpeCharacters, specharacters.length);
 
     document.getElementById("password").addEventListener("click", function () {
      alert("New Password Generating");
     start(document.querySelector("#Your Secure Password"));
    });
   
    }

  return(generatePassword); //I know this is returning the entire generatePassword function but again just wasn't able to figure out before assignment was due. 
  }
 
 


