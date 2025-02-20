// How we store data in memory 
// we categories Primitive Datatype and Non primitive Datatype
// Primitive Data Type 7 categories(Call by Value)
// String , Number,Boolean,undefined, null, Nan, Symbol,BigInt

const score=100 //(so javascript is  dynamically types language)
const scoreValue=100.3
const isLoggedIn=false
const outSideTemp=null
let userEmail=undefined
const id =Symbol('123')
const anotherId=Symbol('123')
console.log(id)//Symbol(123)
console.log(anotherId)//Symbol(123)
console.log(id==anotherId)//false
const bigNumber=85858943790548943994894n
console.log(bigNumber)
console.log(typeof bigNumber)//bigint
// Reference Type(Non primitive)
// Array,Objects,Functions

const heroe=["Shaktima","Nagraj","Doga"];
let myObj={
    name: "Akshay",
    age: 22,
}
const myFunction=function(){
    console.log("Ending begin")
}
console.log(typeof myFunction)// function (but it is object function)
console.log(typeof outSideTemp)//object (for null)
console.log(typeof heroe)//object
console.log(typeof myObj)//object
