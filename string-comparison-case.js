// string-comparison-case.js
// Shows string comparison in JavaScript with case normalization and ordering.

const a = "apple";
const b = "Banana";
const c = "apple";

console.log(`a: "${a}"`);
console.log(`b: "${b}"`);
console.log(`c: "${c}"`);

// Case-sensitive comparison
console.log("a === b:", a === b); // false
console.log("a === c:", a === c); // true

// Case-insensitive comparison by normalizing both strings
const aLower = a.toLowerCase();
const bLower = b.toLowerCase();
const cLower = c.toLowerCase();
console.log("aLower === bLower:", aLower === bLower); // false
console.log("aLower === cLower:", aLower === cLower); // true

// Compare strings alphabetically using localeCompare()
console.log("a.localeCompare(b):", a.localeCompare(b));
console.log("b.localeCompare(a):", b.localeCompare(a));

if (a.localeCompare(b) < 0) {
  console.log(`${a} comes before ${b}`);
} else {
  console.log(`${a} comes after ${b}`);
}
