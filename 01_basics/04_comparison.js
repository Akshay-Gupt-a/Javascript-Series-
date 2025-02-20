console.log("2">1)// true beacuse it converts "2" in number
console.log("02">1)// true same here also

console.log(0>null)// false
console.log(0==null)//false
console.log(null>=0)//true here null converts into 0
console.log(0>=null)// true

console.log(undefined==0)// false
console.log(undefined>0)//false
console.log(undefined>=0)//false

// Note 
// we avoid these like comparison

// ===

console.log("2"==2)//true
console.log("2"===2)//false