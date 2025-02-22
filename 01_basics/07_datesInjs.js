// January 1,1970 from starting
let myDate=new Date() //typeof myDate is object
console.log(myDate);//2025-02-22T11:01:29.110Z
console.log(myDate.toString())//2025-02-22T11:01:29.110Z
console.log(myDate.toJSON());//2025-02-22T11:01:29.110Z
console.log(myDate.toISOString())//025-02-22T11:01:29.110Z
console.log(myDate.toLocaleDateString())//2/22/2025
console.log(myDate.toLocaleString())//2/22/2025, 11:02:41 AM

let myCreatedDate=new Date(2027,8,12)// Year, month,date, hour, min, seconds, miliseconds
console.log(myCreatedDate.toDateString())// Sun sep 12 2027 // month 0 indexing
console.log(myCreatedDate.toLocaleDateString())// 09/12/2027
let myNewDate=new Date("08-10-2032")
console.log(myNewDate.toLocaleDateString());// 09/10/2032
let iCreatedDate=new Date(2223,11,13,8,0)
console.log(iCreatedDate.toLocaleDateString())//12/13/2223
console.log(iCreatedDate.toLocaleString())//12/13/2223, 8:00:00 AM


// about Timestamp it give in milliseconds
let myTimeStamp=Date.now()// today date milliseconds from January 1 1970
console.log(myTimeStamp)//1740223510424
console.log(iCreatedDate.getTime())// from January 1 1970 to this date 8013801600000

console.log(Date.now()/1000)// it gives in second but we will get decimal value//1740223653.257
console.log(Math.floor(Date.now()/1000))//1740223653

let newCDate=new Date()
console.log(newCDate)
console.log(newCDate.getDay())//2025-02-22T11:32:48.927Z
//getMonth,getDay

// how to print->   `${}`

let update=newCDate.toLocaleDateString('default',{ // for property ctr+space
    weekday:"long",
})

console.log(update)// Saturday (beacuse I working on saturday)

