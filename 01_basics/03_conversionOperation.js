let score=33
console.log(typeof score)//number(n is small)
let run="33"
console.log(typeof run)// string 
let valueInNumber=Number(run)
console.log(valueInNumber)//33
console.log(typeof valueInNumber)// number
let s="33abc"
let sInNumber=Number(s)
console.log(sInNumber)// NaN (Not a number)
console.log(typeof(sInNumber));// number (it convert in number type)

let nothing=null
let nothingInNumber=Number(nothing)
console.log(typeof nothing) //object
console.log(nothingInNumber)// 0 (It converts in 0 )

// For boolean  0 and 1

//Imp
// Notes
//"33"=> 33
//"33abc"=> NaN (type number)
// true=1 ; false=0
// null =0 (type object)


let isLoggedIn=1;
let isLoggedInBoolean=Boolean(isLoggedIn);
console.log(isLoggedInBoolean);// true
console.log(typeof isLoggedIn)// number

// 1=> true 0=> false;
// empty string =false, "fill string "=>true

let someNumber=33
let stringNumber=String(someNumber)
console.log(typeof stringNumber)//string

// ******************* Operation *****************
let value=3
let negValue=-value
console.log(negValue)//-3

let str1="hello"
let str2="Akshay"
let str3=str1+str2
console.log(str3)

console.log("1"+2)//12
console.log(1+"2")//12
console.log("1"+"2")//12
console.log("1"+2+2)//122
console.log(1+2+"2")
console.log(+"1"+2)//3

console.log(true)//true
console.log(+true)//1
//console.log(true+)//error


let num1=num2=num3=3+3
console.table([num1,num2,num3])