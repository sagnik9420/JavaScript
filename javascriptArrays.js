// Creating an Array and Initializing with Values
let a = ["HTML", "CSS", "JS"];

// Modifying elements of an Array
let fst = a[0];
a[1] = "React.js"
//console.log("First Item: ", a);

// Creating an Array and Initializing with Values
let a1 = ["HTML", "CSS", "JS"];

// Add Element to the end of Array
//a1.push("Node.js");
//console.log(a1);

// Add Element to the beginning
a1.unshift("Web Development");

//console.log(a1);

// Creating an Array and Initializing with Values
let a2 = ["HTML", "CSS", "JS","Node.js","Angular.js","React.js","Express"];
//console.log("Original Array: " + a2);

// Removes and returns the last element
let lst = a2.pop();
console.log("After Removing the last: " + a2);

// Removes and returns the first element
let fst1 = a2.shift();
console.log("After Removing the First: " + a2);

// Removes 2 elements starting from index 1
a2.splice(2, 3); 
console.log("After Removing 2 elements starting from index 1: " + a2);