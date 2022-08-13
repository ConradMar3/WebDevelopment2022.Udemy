// 1. Create a var user enters to store their name.
var name = prompt("What is your name?");

// 2. Capitalize the first letter of their name.
// a. isolate the first char of their name.
var firstChar = name.slice(0, 1);

// b. turn the first char to upper case.
var upperCaseFirstChar = firstChar.toUpperCase();

// c. isolate the rest of their name.
var restOfName = name.slice(1, name.length);
restOfName = restOfName.toLowerCase();
// d. concat first char with rest.
var capatalisedName = upperCaseFirstChar + restOfName;

// 3. Use the capatalised version in an alert.
alert("Hello, " + capatalisedName);