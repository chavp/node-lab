var alphabet = new Buffer('abcdefghijklmnopqrstuvwxyz');
console.log(alphabet.toString());

var black = new Buffer(26);
black.fill();
console.log("Black: " + black.toString());
alphabet.copy(black);
console.log("Black: " + black.toString());

var dashes = new Buffer(26);
dashes.fill('-');
console.log("Dashes: " + dashes.toString());
alphabet.copy(dashes, 10, 10, 15);
console.log("Dashes: " + dashes.toString());

var dots = new Buffer('---------------------');
dots.fill('.');
console.log("Dots: " + dots.toString());
for (var i = 0; i < dots.length; i++) {
    if (i % 2) { dots[i] = alphabet[i]; }
}
console.log("Dots: " + dots.toString());