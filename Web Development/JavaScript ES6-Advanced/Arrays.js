var guestList = [
    "Buddy",
    "Baby",
    "Driver",
    "Diner",
    "Scene",
    "Watch",
    "Listen",
    "Learn"
];

var guestName = prompt("Knock-knock, Who's there?");

if (guestList.includes(guestName)) {
    alert("Welcome.");
} else {
    alert("Nope.");
}