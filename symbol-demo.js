// Create symbols with optional descriptions
const sym1 = Symbol('id');
const sym2 = Symbol('id');
const sym3 = Symbol('checkName')

console.log(sym1 === sym2); // false

// Using a symbol as an object key
const user = {
  [sym1]: 123
};

const names ={
  [sym3]: 'Adrian',
  [sym2]: 'Liz'
}
console.log(names[sym3])
console.log(names[sym2])
console.log(user[sym1]); // 123