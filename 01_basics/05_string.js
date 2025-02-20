// "" '' ``
let name="Akshay"
console.log(typeof name)//string
let repoCount=100
console.log(name+repoCount+" value")//Akshay100 value
// It is not good way
console.log(`Hello ${name} you code value is ${repoCount}`)//Hello Akshay you code value is 100

const gameName=new String("Akshay")// Now it will use as Object ( it is string but now behave as object You wiil get so much method of it)
//it is now key value pair
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
// .charAt(2)
console.log(gameName.indexOf('a'))
const newString=gameName.substring(0,4)// here is no negative value
console.log(newString)
console.log(gameName.slice(-8,4))
const newStringOne=" Aksahy is here"
console.log(newStringOne.trim());

// give in array in space gap
const stringArray=newStringOne.split(' ');//[ '', 'Aksahy', 'is', 'here' ]
console.log(stringArray)

//checking available or not
console.log(newStringOne.includes('Akshay'))//false // beacause name is Aksahy

// for replacing
const url="https://Akshay.com/akshay%20gupta"
console.log(url.replace('%20',' '))//https://Akshay.com/akshay gupta