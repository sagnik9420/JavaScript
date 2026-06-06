let a = [188, 50, 25, 10,20, 40];
let sub = a.reduce(calculateReduce);

function calculateReduce(tot, num) {
    return tot / num;
}
console.log(sub);