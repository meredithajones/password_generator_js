var allUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]




function generatePassword (){
    var newPassword =""
}

    //Ask what is the length of your password?
    var passwordLength = prompt("What is your password's lenght (Must be between 8 and 128 characters)? ");

    //Double check if the way that <128 below is expressed is correct
    if(passwordLength) >=8 && <128) {
            //Uppercase?
            var useUpper =confirm("Do you want uppercase characters?");

            if (useUpper ===true) {

            }

    //Randomly generate password here

return newPassword;

} else {
    alert("Error! Lenght must be between 8 and 128 characters");
    return "";


}