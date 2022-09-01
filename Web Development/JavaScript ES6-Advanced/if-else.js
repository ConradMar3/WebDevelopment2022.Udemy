prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 70) {
    alert("Your love scored: " + loveScore + " % " + "You love code like you love beer!");
} else {
    alert("You love scored: " + loveScore + " % ");
}