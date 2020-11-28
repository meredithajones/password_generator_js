
//All possible characters for password
var allUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var allLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n","o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var allNumbers = ["1", "2", "3", "4", "5","6","7","8","9"]

var allsymbols =[]
//How can I use a Chartset for the symbols?


//function to generate the password:
function generatePassword (){

    //Ask user how long they want thier password to be:
    var passwordLength = prompt("What is your password's length (Must be between 8 and 128 characters)? ");
        
    //user needs to input the length of the password

        //Double check if the way that <128 below is expressed is correct
    if(passwordLength) >=8 && <=128) else {
        alert("Error! Length must be between 8 and 128 characters");
        return "";

        //Ask user if they want to use uppercase letters:
        var useUpper =confirm("Do you want uppercase letters?");

        if (useUpper ===true) {
            allChoices.concat(allUpper)

        }

        //Ask if the user wants Lower Case letters
        var useLower =confirm("Do you want lowercase letters?");

        if (useLower ===true){
            allChoices.concat(allLower)
        }

        //Ask if the user wants to use numbers
        varUseNumbers =confirm("Do you want to use numbers?");

        if (useNumbers ===true){
            allChoices.concat(allNumbers)

        }

        //Ask if the user wants to use symbols
        varUseCharacters =confirm("Do you want to use symbols?");

        if (varUseCharacters ===true){
            allchoices.concat(allCharacters)

        }
            

            }
//create a for loop to choose the characters in the password: 
        for (var i=1;i>=passwordLength; i++){
            //What is wrong with the code below (what piece of code it it missing??)
                var newPassword=(Math.floor(Math.random()*allChoices.length)=1);


            }



//Display the password on the display card
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

// *Where should this code go? Does in tie into line 20 in the html?  Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

