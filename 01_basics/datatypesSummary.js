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









// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack(Primitive) and Heap(Non-Primitive)
let valueOne="Akshay is here"
let valueTwo=valueOne;// ValueTwo get the copyt of valueOne;
valueTwo="Aryan is here"
console.log(valueOne)//Akshay is here
console.log(valueTwo)//Aryan is here

// Reference
let userOne={
    email:"akshayGupta@gmail.com",
    upi:"Ok@upi"

}
let userTwo=userOne;// It got reference of userOne(so they are pointing to same location)
userTwo.email="aryanGupta@gmai.com"
console.log(userOne)//{ email: 'aryanGupta@gmai.com', upi: 'Ok@upi' }
console.log(userTwo)//{ email: 'aryanGupta@gmai.com', upi: 'Ok@upi' }


