const process = require("process");

function calculate( a,b ) {
    return a + b;
}

const nbA = parseInt(process.argv[2]);
const nbB = parseInt(process.argv[3]);

const summary = calculate(nbA, nbB);

console.log(summary);