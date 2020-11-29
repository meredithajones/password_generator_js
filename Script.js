//All possible characters for password
var allUpper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var allLower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var allNumbers = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
];
var allSymbols = [
  "@",
  "%",
  "+",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  "-",
  "*",
  "~",
];
console.log (allSymbols)

var generateBtn = document.querySelector("#generate");

//function to generate the password:
function generateOptions() {
  //Ask user how long they want thier password to be:
  var passwordLength = parseInt(
    prompt(
      "What is your password's length (Must be between 8 and 128 characters)? "
    )
  );

  //user needs to input the length of the password
  //Where should this "else" code be placed?
  //else {
  //alert("Error! Length must be between 8 and 128 characters");
  //return "";

  //(>=8 && =128)+1;))
  if (passwordLength < 8) {
    alert("Error! Password length must be at leat 8 characters");
    return;
  }

  if (passwordLength > 128) {
    alert("Error! Password length must be at less then 129 characters");
    return;
  }

  // I elminated the "else" by using the two "if" statements above instead
  //else {
  // alert("Error! Length must be between 8 and 128 characters");
  // return "";
  // }

  //Ask user if they want to use uppercase letters:
  var useUpper = confirm("Do you want uppercase letters?");

  // if (useUpper ===true) {
  //     allChoices.concat(allUpper)

  // }

  //Ask if the user wants Lower Case letters
  var useLower = confirm("Do you want lowercase letters?");

  // if (useLower ===true){
  //     allChoices.concat(allLower)
  // }

  //Ask if the user wants to use numbers
  var UseNumbers = confirm("Do you want to use numbers?");

  // if (useNumbers ===true){
  //     allChoices.concat(allNumbers)

  // }

  //Ask if the user wants to use symbols
  var UseSymbols = confirm("Do you want to use symbols?");

  // if (varUseCharacters ===true){
  //     allchoices.concat(allCharacters)

  // }
  // Make sure that the user selects at least on character type
  if (
    useUpper === false &&
    useLower === false &&
    UseNumbers === false &&
    UseSymbols === false
  ) {
    alert("Select at least one character type");
    return;
  }
  var optionsObj = {
    length: passwordLength,
    upper: useUpper,
    lower: useLower,
    special: UseSymbols,
    number: UseNumbers,
  };

  return optionsObj;
}

//Display the password on the display card
// Write password to the #password input

// Assignment Code

//Placing options for the password into an object
function generatePassword() {
  var options = generateOptions();
  console.log("OBJECT", options);

  var result = [];
  //store types of characters to include
  var possibleChar = [];
  //contain one of type of chosen characters
  var guranteeChar = [];

  //Define newPassword
  var newPassword = result;

  if (options.number) {
    possibleChar = possibleChar.concat(allNumbers);
    var randomI = Math.floor(Math.random() * allNumbers.length);
    var element = allNumbers[randomI];
    guranteeChar.push(element);
  }

  if (options.upper) {
    possibleChar = possibleChar.concat(allUpper);
    var randomI = Math.floor(Math.random() * allUpper.length);
    var element = allUpper[randomI];
    guranteeChar.push(element);
  }

  if (options.lower) {
    possibleChar = possibleChar.concat(allLower);
    var randomI = Math.floor(Math.random() * allLower.length);
    var element = allLower[randomI];
    guranteeChar.push(element);
  }

  if (options.symbol) {
    possibleChar = possibleChar.concat(allSymbols);
    var randomI = Math.floor(Math.random() * allSymbols.length);
    var element = allSymbols[randomI];
    guranteeChar.push(element);
  }

  for (let i = 0; i < options.length; i++) {
    var randomI = Math.floor(Math.random() * possibleChar.length);
    var element = possibleChar[randomI];
    result.push(element);
    console.log(result.join(""));
  }

  //At the very end of this code we will "return" the new password that we generated

  return newPassword.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
