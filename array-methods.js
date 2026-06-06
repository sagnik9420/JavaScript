//Delete from array
let emp = { 
    firstName: "Spirit", 
    lastName: "Tomb", 
    salary: 63000
} 

//console.log(delete emp.salary); 
//console.log(emp);

//concat array
let a1 = [11, 12, 13];
let a2 = [14, 15, 16];
let a3 = [17, 18, 19];

let newArr = a1.concat(a2, a3);
//console.log(newArr);

//Flat
const b1 = [['1', '2'], ['3', '4', '5',['6'], '7'],[10,11,12,['66','88']]];
const b2 = b1.flat()
console.log("Flattened Array: "+b2);


//Push 
let a = [45,12,89,32,97,64];
a.push(60);
a.push(71, 89, 23);
//console.log(a);


//Unshift
let arr = [111,198,23,132];
arr.unshift(10, 20);
console.log(arr);

arr.shift();
console.log(arr);











