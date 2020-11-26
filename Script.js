// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
    //randomly generate password here


//At the very end of this code we will "return" the new password that we generated

return newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
