// Assignment Code
var numOfChars = 0;
var numberOfTries = 0;
var passWordSize = 0;

var inputNumeric = false;
var goodInput = false;
var wantUpperCase = false;
var wantLowerCase = false;
var wantNumbers   = false;
var wantSpecChars = false;

var passChar = "";
var newPassWord = "";

var capLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
                  "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
                  "U", "V", "W", "X", "Y", "Z"]

var nums       = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var specChars  = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*",
                 "(", ")", "-", "_", "+", "=","?", "/", "<", ">",]


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  //User can have 5 tries to get the password length correct
  while (numberOfTries < 5) {
    numOfChars = prompt("Between 8 & 128, how long should your passwword be ??");
    inputNumeric = isNaN(numOfChars);

    // Make sure password is numeric & between 8 & 128 chars long.
    if (inputNumeric) {
      numberOfTries = numberOfTries + 1;
    } else if (numOfChars > 128 || numOfChars < 8) {
        numberOfTries = numberOfTries + 1;
    } else {
        numberOfTries = numberOfTries + 10;
        goodInput = true;
    }  

    //If password length is bad & they have more than five tries, kick them out
    //If password length is bad & they have had less than five tries, loop back to the top
    //If password length is good end loop & move forward. 
    if (!goodInput && numberOfTries >= 5) {
     alert("Too many failed attempts, good bye");
    } else if (! goodInput && numberOfTries < 5) {  
     alert("Input is invalid, please reenter");
    } else {
     alert("Input looks good");
    }
  //end of while loop  
  }  
  
  //Ask what type of chars they want included in their password
  if (goodInput) {
    wantUpperCase = confirm("Do you want to use upper case letters");
    wantLowerCase = confirm("Do you want to use lower case letters");
    wantNumbers   = confirm("Do you want to use numbers");
    wantSpecChars = confirm("Do you want to use special charters");
  } 
  
  //If they didn't chose any type of chars, boot them.
  if (goodInput && !wantUpperCase && !wantLowerCase && !wantNumbers && !wantSpecChars) {
    alert("You didn't chose any types of charters, good bye");
    goodInput = false;
  }
  
  //Create password
  while (passWordSize < numOfChars && goodInput) {

    //If they want an uppercase char
    if (wantUpperCase  && passWordSize < numOfChars) {
      passChar = capLetters[Math.floor(Math.random() * capLetters.length)];
      newPassWord = newPassWord + passChar
      passWordSize = passWordSize + 1
    }

    //If they want a lowercase char
    if (wantLowerCase && passWordSize < numOfChars) {
    passChar = capLetters[Math.floor(Math.random() * capLetters.length)];
    passChar = passChar.toLowerCase();
    newPassWord = newPassWord + passChar;
    passWordSize = passWordSize + 1
    }

    //If they want a numeric char
    if (wantNumbers && passWordSize < numOfChars) {
      passChar = nums[Math.floor(Math.random() * nums.length)];
      newPassWord = newPassWord + passChar;
      passWordSize = passWordSize + 1
    }

    //If they want a special
    if (wantSpecChars && passWordSize < numOfChars ) {
      passChar = specChars[Math.floor(Math.random() * specChars.length)];
      newPassWord = newPassWord + passChar;
      passWordSize = passWordSize + 1
    } 
       
}
//end while loop


// Write password to the #password input
  if (goodInput) {
    var password = newPassWord;
  } else {
    var password = "Sorry No Password Generated";
  }  

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


