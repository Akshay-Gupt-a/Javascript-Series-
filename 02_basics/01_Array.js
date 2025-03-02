//Resizable,shallow copy(pointing same address)

const myArr=[0,1,2,3,4,5]
const myHeros=["saktiman","Nagraaj"]

console.log(myHeros)

const myArray2=new Array(1,2,3,4)
console.log(myArray2)

//Array methods

myArray2.push(5)
console.log(myArray2)//[ 1, 2, 3, 4, 5 ]
myArray2.pop()
myArray2.unshift(9)
console.log(myArray2)//[ 9, 1, 2, 3, 4 ]
myArray2.shift()
console.log(myArray2)//[ 1, 2, 3, 4 ]

console.log(myArray2.includes(9))//false
console.log(myArray2.indexOf(1))//0
console.log(myArray2.indexOf(9)) //-1

const newArray=myArray2.join()
console.log(newArray)//1,2,3,4
console.log(typeof newArray);// string

// slice ,splice
const newArr=myArray2.slice(0,3);
console.log(`newArr slice :- ${newArr}`);//newArr slice :- 1,2,3
console.log(`Old Array:-${myArray2}`);//Old Array:-1,2,3,4

const newArr2=myArray2.splice(0,3);
console.log(`newArr splice :-{newArr2}`)//newArr splice :-{newArr2}
console.log(`Old Array :- ${newArr2}`);//Old Array :- 1,2,3
