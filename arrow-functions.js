/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a, b) {
    // Code Block
    return a + b;
}
let sum = addTwoNumbers(7,100);
console.log(sum);
// Arrow Function With Parameters
const addTwoNumbers2 = (a,b) => {
    return a + b;
}
let sum2 = addTwoNumbers(700,1300)
console.log(sum2);

// Single Line Arrow Function With Parameters
// const addTwoNumbers3 = (a, b) => (a + b); // Also valid 
const addTwoNumbers3 = (a, b) => a + b; 
let sum3 = addTwoNumbers3(70,24)
console.log(sum3)
// Implicit Returns
const saySomething = message => console.log(message);
saySomething("What up!")

const sayWhatup = () => console.log("BirdLaw!");
sayWhatup();
// Returning Multiple Lines
const multiLineString = () => (
    `
    I Might 
    & I Will!
    `
)
console.log(multiLineString())
