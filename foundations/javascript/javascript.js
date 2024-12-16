let name = "John";
let surname = "Doe";

console.log(name);
console.log(surname);

let age = 11;
console.log(age); // outputs 11 to the console

age = 54;
 
console.log(age); // what will be output now?

const pi = 3.14;
console.log(pi); // What will be output?

console.log((3 + 2) - 76 * (1 + 1))

console.log(23 + 97)

console.log((4 + 6 + 9) / 77)

let a = 10
console.log(a)
console.log(9 * a)

let b = 7 * a
console.log(b)

const max = 57

let actual = max - 13

let percentage = actual / max

console.log(percentage)

function add7(num) {
    return num + 7
}

function multiply(num1, num2) {
    return num1 * num2
}

function capitalize(str) {
    if (typeof str !== "string" || str.length === 0) {
      return ""; // Return an empty string for invalid input
    }
    
    // Convert the first letter to uppercase and the rest to lowercase
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function lastLetter(str) {
    if (typeof str !== "string" || str.length === 0) {
        return ""
    }

    return str.charAt(str.length - 1)
}

console.log(add7(1))
console.log(multiply(2, 4))
console.log(capitalize(9))
console.log(capitalize("test"))
console.log(lastLetter())
console.log(lastLetter("cool"))








