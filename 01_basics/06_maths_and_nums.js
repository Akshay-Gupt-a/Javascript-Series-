const score=400
console.log(score)//400
// you can do implictly
const balance=new Number(100)
console.log(balance)//[Number: 100]

console.log(balance.toString().length)
console.log(balance.toFixed(2))//100.00

const otherNumber=23.8966
console.log(otherNumber.toPrecision(3))//23.9
// It returs as string and it gives precison from starting here 3
const other=123.8999
console.log(other.toPrecision(2))//1.2e+2
console.log(other.toPrecision(4))//123.9

const hundred=100000
console.log(hundred.toLocaleString())//100,000 (as american )
// If you want as Indian
console.log(hundred.toLocaleString('en-IN'))//1,00,000


console.log(Number.MIN_VALUE)
console.log(Number.MIN_SAFE_INTEGER)


// _____________------Maths----____________

console.log(Math);//Object [Math] {}
console.log(Math.abs(-4));//4
console.log(Math.round(4.3))//4
console.log("for 4.5")
console.log(Math.round(4.5))//5
console.log(Math.ceil(4.2))// 5 (top value if 4 se above hua)
console.log(Math.floor(4.9))//4 
// sqrt ,pow, min(4,5,3,3,6,), Math.max(4,5,5,6)

// For random  between (0,1)
console.log(Math.random())//0.6062337175123553
// between 0 and 9
console.log(Math.random()*10)// it gives from 0 to 9
// but want between 1 to 0
console.log((Math.random()*10)+1)
let randomNumber=(Math.random()*10)+1;
console.log(Math.round(randomNumber));// You can use Math.floor

const min=10;
const max=20
console.log(Math.random()*(max-min+1)+min)//15.66531162101746
console.log(Math.floor(Math.random()*(max-min+1)+min))//15