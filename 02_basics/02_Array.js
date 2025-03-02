const marvel_heros=["Thor","IronMan","SpiderMan"]
const dc_heros=["Superman","Flash","Batman"]
//marvel_heros.push(dc_heros); //[ 'Thor', 'IronMan', 'SpiderMan', [ 'Superman', 'Flash', 'Batman' ] ]
//console.log(marvel_heros)

//marvel_heros.concat(dc_heros)
//console.log(marvel_heros)//[ 'Thor', 'IronMan', 'SpiderMan' ]

const heros=marvel_heros.concat(dc_heros);
console.log(heros);//[ 'Thor', 'IronMan', 'SpiderMan', 'Superman', 'Flash', 'Batman' ]

const all_new_heros=[...marvel_heros,...dc_heros]// Spread Operator ..recommeded
console.log(all_new_heros)//[ 'Thor', 'IronMan', 'SpiderMan', 'Superman', 'Flash', 'Batman' ]


//How to flat
// accordint to depth of array you can give value but simply you can give Infinty
const another_array=[1,2,3,[4,5,6],[6,7,8,[7,9,10]]];
const useful_another_array=another_array.flat(Infinity)// You can use depth value or Infinity
console.log(useful_another_array);
// 
// [
//     1,  2, 3, 4, 5,
//     6,  6, 7, 8, 7,
//     9, 10
//   ]

// Convert Array of change array
console.log(Array.isArray("Akshay"))//
console.log(Array.from("Akshay"))//[ 'A', 'k', 's', 'h', 'a', 'y' ]
console.log(Array.from({name:"Akshay"}))//[] //Interesting thing for interview


// Return  array from set of variables(it can be anything  like array, string , number)
let score1=100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));// [ 100, 200, 300 ]
