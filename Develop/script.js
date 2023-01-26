// Password Generator PseudoCode Wireframe
/**
 * use code given that defines the Generate Password Button note we will need to add eventListener to listen for button click
 * write password to the #password input --- from researching online I think this means we need to use import java.io.Console;  after testing, it reports errors. Get a tutor to see why as after hours of researching, still unable to figure out how to get it to log to HTML placeholder.
 * from here, add event listener to listen for click
 * below that begin my code:
 *      - define numberofcharacters desired. must stay within 8-128 parameters... see below for if conditions after user input
 *      - define upper, lower, special, and numberic character arrays which will be boolean values 
 *      - apply function of generate password 
 *          - within function define objects that will prompt and alert as outlined below
 *          - 1st prompt - upon user click, prompt "how many characters would you like your password to be?"
 *              - if less than 8 alert "password must be more than 7 characters"
 *              - if greater than 128 alter "password must be less than 129 characters"
 *          - 1st confirm - confirm if user wants to use uppercase characters - boolean value "Click OK if you would like password to contain uppercase characters"
 *          - 2nd confirm - confirm if user wants to use lowercase characters - boolean value "Click OK if you would like password to contain lowercase characters"
 *          - 3rd confirm - confirm if user wants to use numeric characters - boolean value "Click OK if you would like password to contain numeric characters"
 *          - 4th confirm - confirm if user wants to use special characters - boolean value "Click OK if you would like password to contain special characters"
 * 
 *      - create function that takes all user inputs and uses random method to generate password with randomly order values
 *      - apply return to function that displays new password within "Your Secure Password" placeholder using writepassword = document.getElementId ("your-secure-password");
 * 
 */


// Assignment Code
var generateBtn = document.querySelector("#generate");


function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

function generatePassword() {
  var lowercasecharacters = "abcdefghijklmnopqrstuvwxyz";
  var uppercasecharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numcharacters = "0123456789";
  var specharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  var characterLength = prompt("How many characters would you like your password to be? (Must be between 8-128)");
  if(characterLength < 8 || characterLength > 128) {
    return generatePassword();
  }

  var availableCharacters = "";

  var lowerConfirm = confirm("do you want to use lowercase characters?");
  if(lowerConfirm == true) {
    availableCharacters += lowercasecharacters;
  }

  var upperrConfirm = confirm("do you want to use uppercase characters?");
  if(upperrConfirm == true) {
    availableCharacters += uppercasecharacters;
  }
  
  var numberConfirm = confirm("do you want to use numbers?");
  if (numberConfirm == true) {
    availableCharacters += numcharacters;    
  }

  var specConfirm = confirm("do you want to use special characters?");
  if(specConfirm == true) {
    availableCharacters += specharacters;
    }

  var generatedPassword = "";

  for(i=0; i< characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * availableCharacters.length);
    generatedPassword += availableCharacters[randomIndex]
  }

  return generatedPassword
}


 // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

