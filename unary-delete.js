const user = { name: "Mariane", age: 25 };

// Deleting a property
delete user.age; 
console.log(user); // { name: "Alice" }

// Deleting a non-existent property
console.log(delete user.job); // true (returns true even if it wasn't there)