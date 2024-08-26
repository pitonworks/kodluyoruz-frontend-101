// Arrow function Kullanimi
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

function hello(firstName) {
    console.log(`Merhaba ${firstName}`)
}

hello("JavaScript")

const helloFuncV1 = (firstName) => { console.log(`Merhaba ${firstName}`) } 
helloFuncV1("helloFuncV1")


const helloFuncV2 = firstName => console.log(`Merhaba ${firstName}`) // bir parametre, bir donus islemi
helloFuncV2("helloFuncV2")


const helloFuncV3 = (firstName, lastName) => console.log(
    `Merhaba ${firstName} ${lastName}`
) // console.log parantezi

helloFuncV3("helloFuncV3", "Last Name info")

const helloFuncV4 = (firstName, lastName) => {
    let info = `Merhaba ${firstName} ${lastName}`
    console.log(info) 
    return info
}

helloFuncV4("helloFuncV4", "Other Info")

//arrow function commit
//*****************************************************/
// Function declaration
function greet(who) {
    return `Hello, ${who}!`;
  }
  greet("John") // output : Hello, John!
  
  // Function expression
  const greet = function(who) {
    return `Hello, ${who}!`;
  }
   greet("John") // output : Hello, John!

//*****************************************************/
   // ES5
var multiplier = function(item, multi) {
    return item * multi
};
multiplier(5, 2); // output : 10

// ES6
const multiplier = (item, multi) => item * multi;
multiplier(5, 2); // output : 10

//*****************************************************/
//ES5
var myList = function(param1, param2) {
    return param1.concat(param2);
  };
  myList([1, 2], [3, 4, 5]); // output : [ 1, 2, 3, 4, 5 ]
  
  //ES6
  const myList = (param1, param2) => param1.concat(param2);
  myList([1, 2], [3, 4, 5]); // output : [ 1, 2, 3, 4, 5 ]
  //*****************************************************/
// if statement arrow function
  var feedTheCat = (cat) => {
    if (cat === 'hungry') {
      return 'Feed the cat';
    } else {
      return 'Do not feed the cat';
    }
  }
//*****************************************************/

let movie = { 

    name: "La la land",
    
    thisInArrow:() => { 
    console.log("Movie name is " + this.name); // 'this' window'u referans gösterir. Bu yüzden name'yi bulamaz.
    }, 
    
    thisInRegular(){ 
    console.log("Movie name is " + this.name); // 'this' kendisini referans gösterir ve çalışır.
    } 
    
    };
    movie.thisInArrow(); // output : Movie name is
    movie.thisInRegular(); // output : Movie name is La la land
    
//*****************************************************/