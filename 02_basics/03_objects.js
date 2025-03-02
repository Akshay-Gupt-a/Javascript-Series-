// Literal , constructor

// Singleton ( ye apni tarike ka ek hi object hai) => Literal ke tarike banayege to nhi bnata hai but constructor(Object.create) se banega
// ek dusri tarike ka hota hai usme uski tarike ke bhut sare hote hai

// Object Literal

const mySym=Symbol("key1");
const JsUser={
    name:"Akshay",
    "Full Name":"Akshay Gupta",
    age:21,
    [mySym]:"myKey1",//mySym:"myKey1", not like this
    email:"Akshay@google.com",
    location:"Fatehput",
    isLggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(JsUser.email)// we can do it but not prefered manner
console.log(JsUser["email"])// prefered manner

// beacuse
// You can access full name by dot operator
console.log(JsUser["Full Name"])// Akshay Gupta

// if we using symbol in not recommeded manner
// console.log(JsUser.mySym);// myKey1// here we are not accesing that symbol which we define
// console.log(typeof(JsUser.mySym))// string (it accessing myKey1 which is string)  

// when we use as recommed manner
console.log(JsUser[mySym]);//Not using string inside .. Output:- myKey1
console.log(typeof JsUser[mySym]);// string


// Changing
JsUser.email="Akshay@chat.com"
// Object.freeze(JsUser)
Object.email="Akshay@microshoft.com"
console.log(JsUser)
// {
//     name: 'Akshay',
//     'Full Name': 'Akshay Gupta',
//     age: 21,
//     email: 'Akshay@chat.com',
//     location: 'Fatehput',
//     isLggedIn: false,
//     lastLoginDays: [ 'Monday', 'Saturday' ],
//     [Symbol(key1)]: 'myKey1' // You can also see that if we not using [] for Symbol then it will be normal but here it is symbol.
//   }

// Function

JsUser.greeting=function(){
    console.log("Hello Js User")
}
console.log(JsUser["greeting"]);//undefined //beacuse it was freeze
// after comment
// [Function (anonymous)]
console.log(JsUser.greeting())
//Hello Js User
//undefined


JsUser.greeting2=function(){
    console.log(`Hello js user ${this["Full Name"]}`)
}
console.log(JsUser.greeting2())//Hello js user Akshay Gupta
                                // undefined


