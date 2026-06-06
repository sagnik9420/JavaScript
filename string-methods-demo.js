// string-methods-demo.js
// Demonstrates common JavaScript string methods: slice, substring, substr, replace, replaceAll, toUpperCase, toLowerCase.

const text = "JavaScript String Methods";
console.log("Original text:", text);
console.log("Length:", text.length);

// slice(start, end)
console.log("slice(0, 10):", text.slice(0, 10));
console.log("slice(11):", text.slice(11));
console.log("slice(-7):", text.slice(-7));

// substring(start, end)
console.log("substring(0, 10):", text.substring(0, 10));
console.log("substring(11):", text.substring(11));
console.log("substring(10, 0):", text.substring(10, 0));

// substr(start, length)
console.log("substr(0, 10):", text.substr(0, 10));
console.log("substr(11, 6):", text.substr(11, 6));
console.log("substr(-7, 7):", text.substr(-7, 7));

// replace(searchValue, replaceValue)
const replaceExample = "red ball red car";
console.log("replaceExample:", replaceExample);
console.log("replace('red', 'blue'):", replaceExample.replace("red", "blue"));
console.log("replace(/red/g, 'blue'):", replaceExample.replace(/red/g, "blue"));

// replaceAll(searchValue, replaceValue)
console.log("replaceAll('red', 'blue'):", replaceExample.replaceAll("red", "blue"));
console.log("replaceAll(/red/g, 'blue'):", replaceExample.replaceAll(/red/g, "blue"));

// toUpperCase() and toLowerCase()
const mixedCase = "Hello World";
console.log("mixedCase:", mixedCase);
console.log("toUpperCase():", mixedCase.toUpperCase());
console.log("toLowerCase():", mixedCase.toLowerCase());

// Additional demonstration: normalization before comparison
const inputA = "JavaScript";
const inputB = "javascript";
console.log("Normalized equality:", inputA.toLowerCase() === inputB.toLowerCase());
