// scripts.js
// Zadanie 8.6

var a;
var b;

a = prompt ('Enter value for a');
b = prompt ('Enter value for b');

var value = (a * a) + (2 * a * b) - (b * b);

console.log ('Value: ' + value);

if (value < 0) {
	console.log ('Outcome is negative');
}	else if (value > 0) {
		console.log ('Outcome is positive');
}	else { 
		console.log ('Outcome is zero');
}
