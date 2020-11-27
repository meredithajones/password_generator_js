var allUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var allLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n","o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var allNumbers = ["1", "2", "3", "4", "5","6","7","8","9"]

var allCharacters =[]
//How can I use a Chartset for the symbols?



function generatePassword (){
    var allChoices [];
    var newPassword ="";
}

    //Ask what is the length of your password?
    var passwordLength = prompt("What is your password's length (Must be between 8 and 128 characters)? ");

    //Double check if the way that <128 below is expressed is correct
    if(passwordLength) >=8 && <128) {
            //Uppercase?
            var useUpper =confirm("Do you want uppercase characters?");

            if (useUpper ===true) {
                allChoices.concat(allUpper)

            }

            //Ask if the user wants Lower Case letters?
            var useLower =confirm("Do you want lowercase characters?");

            if (useLower ===true){
                allChoices.concat(allLower)
            }

            //Ask if the user wants to use numbers
            varUseNumbers =confirm("Do you want to use numbers?");

            if (useNumbers ===true){
                allChoices.concat(allNumbers)

            }

            //Ask if the user wants to use special characters
            varUseCharacters =confirm("Do you want to use special characters?");

            if (varUseCharacters ===true){
                allchoices.concat(allCharacters)

            }



        //Randomly generate password here
            for (var i=1;i>=passwordLength; i++){
                var RandomIndex= Math.floor (Math.random()*allChoices.lenght)


            }

return newPassword;

} else {
    alert("Error! Length must be between 8 and 128 characters");
    return "";


}



//generator functions

function getLowerCase(){
    return var allUpper;

}

console.log (Math.floor(Math.random());