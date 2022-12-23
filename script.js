// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword(){
    //use a 2D array that holds all of the potential character choices
    var choicesArray = [["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
                        ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P","Q", "R", "S", "T", "U", "V", "W", "X","Y", "Z"],
                        ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]", "^","_", "`", "{", "|", "}", "~"],
                        ["0","1","2","3","4","5","6","7","8","9"]];
    var password;
    var numChar;
    var isLowerCase = false;
    var isUpperCase = false;
    var areSpecialChar = false;
    var isNumeric = false;
    console.log("button pressed");
    //1. Create prompts for password criteria
    //a. numChar>=8 && passwordChar<=128 && dataTypeOf == number
    //if input does not meet criteria, re-ask the question
    function numCharChecker(){
        let numCharAsk = prompt("How many characters do you want your password to be?\n     (please enter a number between 7 and 129)", 10);
            if(numCharAsk>=8 && numCharAsk<=128 && numCharAsk != null){
                numChar=numCharAsk;
            }else{
                numCharChecker();
            }
    }
    numCharChecker();
    
        
    //atleast 1 character type needs to be selected, restart all questions if no selected on all choices, restart char prompts 
    
    

    //b. charType booleans= isLowerCase, isUpperCase, isNumeric, areSpecialChar 
    //only provide yes/no option for all charType questions use confirm() method   
    function passParameterChecker(){
        let upperCase = "Confirm OK for upper case letters";
        if (confirm(upperCase) == true) {
            upperCase = "You pressed OK!";
            isUpperCase=true;
        } else {
            upperCase = "You canceled!";
            isUpperCase=false;
        }
        console.log("isUpperCase: " + isUpperCase);
    
        let lowerCase = "Confirm OK for lower case letters";
            if (confirm(lowerCase) == true) {
                lowerCase = "You pressed OK!";
                isLowerCase=true;
            } else {
                lowerCase = "You canceled!";
                isLowerCase=false;
            }
            console.log("isLowerCase: " + isLowerCase);
    
        let numeric = "Confirm OK for numbers";
            if (confirm(numeric) == true) {
                numeric = "You pressed OK!";
                isNumeric=true;
            } else {
                numeric = "You canceled!";
                isNumeric=false;
            }
            console.log("isNumberic: " + isNumeric);

        let specialChar = "Confirm OK for special characters";
            if (confirm(specialChar) == true) {
                specialChar = "You pressed OK!";
                areSpecialChar=true;
            } else {
                specialChar = "You canceled!";
                areSpecialChar=false;
        }
        console.log("areSpecialChar: " + areSpecialChar);

        if(!isLowerCase && !isUpperCase && !areSpecialChar && !isNumeric){
            passParameterChecker();
        }    
    }
    passParameterChecker();

            
    //2. Generate the random password
        //use =Math.floor(Math.random() * 10)
        //check outer portion of array, if one of the constraints is false, re-generate a random
        //number until constraints are satisfied.
    function randomConstraintChecker(){
        var checkedValue=-1;
        var valueGTG=false;
        do{
            checkedValue=Math.floor(Math.random()*(choicesArray.length));
            if(checkedValue==0 && isLowerCase){
                valueGTG=true;
            }
            if(checkedValue==1 && isUpperCase){
                valueGTG=true;
            }
            if(checkedValue==2 && areSpecialChar){
                valueGTG=true;
            }
            if(checkedValue==3 && isNumeric){
                valueGTG=true;
            }
        }while(!valueGTG);
        console.log("checkedValue: " + checkedValue);
        return checkedValue;
    }
    //generate the password based on number of characters and constraint checker function.
    for(var i =0; i<numChar; i++){
        var outerElement=randomConstraintChecker();
        var innerElement = Math.floor(Math.random()*(choicesArray[outerElement].length));

        if(password==undefined){
            password=choicesArray[outerElement][innerElement];
        }else{
            password=password.concat(choicesArray[outerElement][innerElement]);
        }
        console.log(password);
    }
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
