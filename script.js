console.log("Hello, world!");
console.log("From script.js file.");

const myName = "Guian Mark Dumagat";
let age = 21;
const numbers = "09666734556";
const address = "Brgy. XXI, Palanca Village, Victorias City.";


console.log(`Name: ${myName}`);
console.log(`Age: ${age}`);
console.log(`Number: ${numbers}`);
console.log(`Address: ${address}`);
console.log(67);

function greet(greetings,names = []) {
    if(Array.isArray(names)) {
       parameters = names.join(", ");
    
        return `${greetings} sa emu, ${parameters}`;
    }
}
console.log(greet("Mayung aga ", ["Guian" , "Mark" , "Arjay" , "Myco."]));

const heading = document.querySelector("h1");
heading.textContent = "Your Father's Name";
console.log(heading.textContent);

const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading);

const projectHeading = document.querySelector("#services h2");
console.log(projectHeading);