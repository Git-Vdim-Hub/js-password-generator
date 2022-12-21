// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword(){
    var password = "password will go here"
    console.log("button pressed");
    // PSEUDO CODING
    //1. Create prompts for password criteria
    let person = prompt("Please enter your name", "Harry Potter");

    if (person != null) {
         console.log(person);
    }
        //a. passwordChar>=8 && passwordChar<=128 && dataTypeOf == number
            //if input does not meet criteria, re-ask the question
        //b. charType booleans= isLowerCase, isUpperCase, isNumeric, areSpecialChar
            //atleast 1 character type needs to be selected, restart all questions if no selected on all choices, restart char prompts
            //only provide yes/no option for all charType questions
    //2. Generate the random password
        //use =Math.floor(Math.random() * 10) returns a random integer between 0 and 9 (both included):
        //use an array that holds number, letter, special char, randomize which one is used, if they prompt not to use it, dont use that element
        //set all alphabet letters to each element of an array, use Math.random to that size to go through all the letters
        //set isLowerCase to a 2 element array, math.random 0 or 1
    


    return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
    // console.log("hello");
    return "hello";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
