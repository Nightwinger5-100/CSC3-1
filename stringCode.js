function checkCredentials() {

console.log("Checking Creds...");

//get loginStatus
document.getElementById("loginStatus").innerHTML = "Status of Login";

//variables
var firstName;
var lastName;
var fullName;
var fullNameLength;
var zipCode;
var zipCodeNum;

//get first name
firstName = document.getElementById("fName").value;
console.log("The input first name is: " + firstName);

//get last name
lastName = document.getElementById("lName").value;
console.log("The input last name is: " + lastName);

//combine the first and last name
fullName = firstName + " " + lastName;
console.log("Their fullName name is: " + fullName);

//geet the amount of characters in the full name
fullNameLength = fullName.length - 1;
console.log("The total number of characters in their full name is: " + fullNameLength);

//get zip code
zipCode = document.getElementById("zipCode").value;
console.log("The input zipCode is: " + zipCode);

//get the zip code as a number
zipCodeNum = parseInt(zipCode);
console.log("The zipCode as a number is: " + zipCodeNum);

//Check if the name length is between 4-20 characters and if the first and last name are greater than 2 characters
if (fullName < 4 || fullNameLength > 20 || firstName.length < 2 || lastName.length < 2) {
//Return invalid name
    document.getElementById("loginStatus").innerHTML = "Invalid full name";
//Check if the zipcode is 5 characters 
} else if ( zipCode.length != 5) {
//Return invalid zip
    document.getElementById("loginStatus").innerHTML = "Invalid zip code";
//Brings up a popup that welcomes the user to the site
} else {
alert("User credentials passed. Welcome to the site " + fullName);
}

}

function checkPalin() {
    console.log("Checking Palin...");

    var entStr;
    entStr = document.getElementById("palinInput").value;
    console.log("entstr is " + entStr);

    var entStrNoSpace;
    entStrNoSpace = entStr.split(" ").join("");
    console.log("entStr with no space is " + entStrNoSpace);

    var revStr;
    const revArray = [];
    var length = entStrNoSpace.length-1;
    console.log("String length is " + length);

    for(var i = length; i >= 0; i--){
        revArray.push(entStrNoSpace[i]);
    }

    revStr = revArray.join("");
    console.log("revStr is " + revStr);

    var equal = 0;

    equal = (entStrNoSpace === revStr);
    console.log("The ent with no spaces compared to the rev string is " + equal)

    if(equal == true ){
        document.getElementById("palinStatus").innerHTML = entStr + "<b> is <b> a palindrome";
    } else {
        document.getElementById("palinStatus").innerHTML = entStr + "<b> isn't <b> a palindrome";
    }
}