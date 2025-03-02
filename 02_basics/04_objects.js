const tinderUser=new Object();// Singleton object
console.log(tinderUser)
const twitterUser={}// not singleton 
// baki sab story same hai

//Sigleton 
tinderUser.id="123abc"
tinderUser.name="Samaya"
tinderUser.isLoggenIn="False"
console.log(tinderUser)//{ id: '123abc', name: 'Samaya', isLoggenIn: 'False' }

const regularUser={
    email:"someone@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Akshay",
            lastname:"Gupta"
        }
    }
}
console.log(regularUser)
//{
//     email: 'someone@gmail.com',
//     fullname: { userfullname: { firstname: 'Akshay', lastname: 'Gupta' } }
//   }
console.log(regularUser.fullname?.userfullname.firstname)//Aksahy
//? beacuse if value not is there

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}
const obj3={obj1,obj2}
console.log(obj3)//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } } // it created object as key and value not merge them

const obj4=Object.assign({},obj1,obj2);// Object.assign(target,source);
console.log(obj4)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// By spread operator
const obj5={...obj1,...obj2};
console.log(obj5);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


// when value comes from database
// It comes many times array of obejects...
const users=[
    {
        id:1,
        email:"h@gmail"
    },
    {
        id:2,
        email:"h2@gmail"
    }
]
console.log(users[1].id);//2

console.log(tinderUser);//{ id: '123abc', name: 'Samaya', isLoggenIn: 'False' }

console.log(Object.keys(tinderUser))//[ 'id', 'name', 'isLoggenIn' ] it give array
console.log(Object.values(tinderUser))//[ '123abc', 'Samaya', 'False' ]
console.log(Object.entries(tinderUser))//[ [ 'id', '123abc' ], [ 'name', 'Samaya' ], [ 'isLoggenIn', 'False' ] ]

// when you are accesing the property value you should it first beacuse if you are not checking and it is not there then it can be crash
console.log(tinderUser.hasOwnProperty('isLoggenIn'))// true 
