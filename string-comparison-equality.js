// string-comparison-equality.js
// Demonstrates comparing strings in JavaScript using equality and strict equality.

const first = "Hello";
const second = "hello";
const third = "Hello";

console.log(`first: "${first}"`);
console.log(`second: "${second}"`);
console.log(`third: "${third}"`);

console.log("first == second:", first == second);   // false, because case is different
console.log("first === second:", first === second); // false, strict equality also checks type and value
console.log("first === third:", first === third);   // true, same characters and same order

if (first === third) {
  console.log("The strings are identical.");
} else {
  console.log("The strings are different.");
}
