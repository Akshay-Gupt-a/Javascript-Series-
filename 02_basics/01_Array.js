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