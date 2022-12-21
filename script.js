// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword(){
    var password = "password will go here"
    var numChar;
    var isUpperCase;
    var isLowerCase;
    var isNumeric;
    var areSpecialChar;
    console.log("button pressed");
    // PSEUDO CODING
    //1. Create prompts for password criteria
    //a. numChar>=8 && passwordChar<=128 && dataTypeOf == number
    //if input does not meet criteria, re-ask the question
    let numCharAsk = prompt("How many characters do you want your password to be?\n(please enter a number between 7 and 129)", 10);
        if(numCharAsk>=8 && numCharAsk<=128 && numCharAsk != null){
            numChar=numCharAsk;
            console.log(numChar);
        }
    
    
        
    //atleast 1 character type needs to be selected, restart all questions if no selected on all choices, restart char prompts 
    
    

    //b. charType booleans= isLowerCase, isUpperCase, isNumeric, areSpecialChar    
    let upperCase = "Confirm OK for upper case letters";
        if (confirm(upperCase) == true) {
            upperCase = "You pressed OK!";
            isUpperCase=true;
        } else {
            upperCase = "You canceled!";
            isUpperCase=false;
        }
        console.log(isUpperCase);
    
    let lowerCase = "Confirm OK for lower case letters";
        if (confirm(lowerCase) == true) {
            lowerCase = "You pressed OK!";
            isLowerCase=true;
        } else {
            lowerCase = "You canceled!";
            isLowerCase=false;
        }
        console.log(isLowerCase);
    
    let numeric = "Confirm OK for numbers";
        if (confirm(numeric) == true) {
            numeric = "You pressed OK!";
            isNumeric=true;
        } else {
            numeric = "You canceled!";
            isNumeric=false;
        }
        console.log(isNumeric);

    let specialChar = "Confirm OK for special characters";
        if (confirm(specialChar) == true) {
            specialChar = "You pressed OK!";
            areSpecialChar=true;
        } else {
            specialChar = "You canceled!";
            areSpecialChar=false;
        }
        console.log(areSpecialChar);
    
    
    
        
        //document.getElementById("demo").innerHTML = text;



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
