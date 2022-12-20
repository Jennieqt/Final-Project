var attempt = 3;
var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
function validate() {
    console.log("test");
    var myUsername = document.getElementById("username");
    var myPassword = document.getElementById("password");
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;
    let userNameHasLowercase = false;
    let usernameHasUppercase = false;
    let usernameHasNumbers = false;
    let usernameIsValidLength = false;
    let usernameHasSpecChar = false;
    let passHasNumbers = false;
    let passIsValidLength = false;
    let passHasSpecChar = false;
    let isValidUsername = false;
    let isValidPassword = false;

    /**
     * This block validates username
     */
    // Validate lowercase letters
    if(myUsername.value.match(lowerCaseLetters))
    {
        console.log("username has lowercase");  
        userNameHasLowercase = true;
    }

    // Validate capital letters
    if(myUsername.value.match(upperCaseLetters))
    {  
        console.log("username has uppercase");
        usernameHasUppercase = true;
    }

    // Validate numbers
    if(myUsername.value.match(numbers))
    {  
        console.log("username has numbers");
        usernameHasNumbers = true;
    }

    if(myUsername.value.match(format))
    {
        console.log("username has special characters");
        usernameHasSpecChar = true;
    }

    // Validate length
    if(myUsername.value.length >= 8)
    {
        console.log("username is valid length");
        usernameIsValidLength = true;
    }


    /**
     * This block validates password
     */

    // Validate numbers
    if(myPassword.value.match(numbers))
    {  
        console.log("password has numbers");
        passHasNumbers = true;
    }

    if(myPassword.value.match(format))
    {
        console.log("password has special characters");
        passHasSpecChar = true;
    }

    // Validate length
    if(myPassword.value.length >= 8)
    {
        console.log("password is valid length");
        passIsValidLength = true;
    }

    if(userNameHasLowercase && usernameHasUppercase)
    {
        isValidUsername = true;
    }

    if(userNameHasLowercase && usernameHasUppercase && passHasNumbers && passHasSpecChar && passIsValidLength)
    {
        isValidPassword = true;
    }

    if(isValidUsername && isValidPassword)
    {
        window.location.href="welcomepage.html"; //enter a new window
        alert("Success!");
        return false;
    }
    else
    {
        attempt --;// Decrementing by one.
        alert("You have left "+attempt+" attempt;");
        // Disabling fields after 3 attempts.
        if( attempt == 0){
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submit").disabled = true;
        return false;
        }
    }
}