// access-characters.js
// Demonstrates accessing characters from a string in JavaScript.

const text = "JavaScript";

console.log("Original text:", text);
console.log("First character:", text[0]);
console.log("Fifth character:", text[4]);
console.log("Seventh character using charAt:", text.charAt(6));

const firstChar = text[0];
const lastChar = text[text.length - 1];

console.log("First:", firstChar);
console.log("Last:", lastChar);

console.log("Looping through each character:");
for (let i = 0; i < text.length; i++) {
  console.log(`index ${i}:`, text[i]);
}
