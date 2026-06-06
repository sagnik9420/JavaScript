//Iterating Through Array Elements

// Creating an Array and Initializing with Values
let a = ["HTML", "CSS", "JS"];

// Iterating through for loop
for (let i = 0; i < a.length; i++) {
    console.log(a[i])
}

// Iterating through forEach loop
a.forEach(function myfunc(x) {
    console.log(x);
});