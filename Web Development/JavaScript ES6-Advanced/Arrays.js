var guestList = [
    "Buddy",
    "Baby",
    "Driver",
    "Diner",
    "Scene",
    "Watch",
    "Listen",
    "Learn"];

var guestName = prompt("Knock-knock, Who's there?");

if (guestList.includes(guestName)) {
    alert("Hello, 'MATE'!");
} else {
    alert("Bugs Bunny!!!!! Now I'M Seeing red, and you, well...ARE GOING TO SEE BLACK!!!!!");
}