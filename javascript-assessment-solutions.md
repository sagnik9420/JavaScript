# JavaScript Assessment Solution Paper

## Section A: Multiple Choice Answers

1. B
2. B
3. B
4. B
5. C
6. B
7. B
8. B
9. B
10. C
11. C
12. B
13. A
14. C
15. A
16. B
17. B
18. B
19. C
20. A

## Section B: Program Solutions

### Question 1
```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
const doubled = evenNumbers.map(num => num * 2);
console.log(doubled);
```

### Question 2
```javascript
const input = "  JavaScript is fun  ";
const trimmed = input.trim();
const upper = trimmed.toUpperCase();
const result = upper.replace("FUN", "EASY");
console.log(result);
```

### Question 3
```javascript
const fruits = ["apple", "banana", "cherry"];
const joined = fruits.join(",");
const lower = joined.toLowerCase();
console.log(lower);
```

### Question 4
```javascript
const text = "Hello World";
const first = text[0];
const last = text[text.length - 1];
const middle = text[Math.floor(text.length / 2)];
console.log("First:", first);
console.log("Middle:", middle);
console.log("Last:", last);

let reversed = "";
for (let i = text.length - 1; i >= 0; i--) {
  reversed += text[i];
}
console.log("Reversed:", reversed);
```

### Question 5
```javascript
const person = {
  name: "Sagnik",
  age: 22,
  city: "Kolkata"
};

console.log("Before deletion:", person);
delete person.city;
console.log("After deletion:", person);
```

---

Total Marks: 50
