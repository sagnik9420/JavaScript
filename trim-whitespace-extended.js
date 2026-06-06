// trim-whitespace-extended.js
// Demonstrates trimming whitespace including tabs and newlines using trim().

const text = "\n\t  JavaScript trim example  \t\n";
const cleaned = text.trim();

console.log("Original:", JSON.stringify(text));
console.log("Trimmed:", JSON.stringify(cleaned));
