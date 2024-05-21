// Primitive
// 7 types : String, Number, Boolean, null, undefine, symbol, BigInt

const id = Symbol('231')
const anotherId = Symbol('321')
// console.log(id === anotherId);

// using the n represents in the last then it convert to the bigint
const bigNumber = 9467934759347976n
// console.log(bigNumber);

// Reference (Non primitive)
// Array, object, and Function
const heros = ['shaktiman', 'hatimtai', 'thanos']
let myObj = {
    name : 'Rahul',
    age : '28',
    designations : 'IT Executive'
}

const myFunction = function(){
    console.log("Hello! This is print inside the function");
}

// console.log(typeof myFunction);


// ++++++++++++++++++++++++++++++++++++++++++++
// Stack (Primitive), Heap (Non Primitive)

// Store in Stack (Primitive)
let mySeriesName = 'Javascript_with_node_js'
let anotherName = mySeriesName
anotherName = 'Django_with_python';

// console.log(mySeriesName);
// console.log(anotherName);

// store in Heap memory 
let userOne = {
    email : 'rahul@google.com',
    upi : 'rahul@ybl'
}
let userTwo = userOne
userTwo.email = 'rahul@gmail.com'

// console.log(typeof userTwo);
// console.log(userOne.email);

// String Interpolation in JavaScript
let name = "Rahul", repoCount = 5;
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Harswetic Computer education...')
// return in the string object here (with gameName give multi methods)
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// const newString = gameName.substring(0, 8);
// console.log(newString);

const anotherString = gameName.slice(8, 6)
// console.log(anotherString)

const url = "C:/Users/lenovo/Desktop/API%20and%20javascript/jqueryTableData.html"
// console.log(url.replaceAll('%20', ' ')); // replace or replaceall both work
// console.log(url.includes('lenovo')); // exist or not in the url const
// console.log(url.split('/'))
// console.log(gameName.split(' '));

const balance = new Number(150543.56)
// console.log(typeof balance)
// console.log(balance.toFixed(2));
// console.log(balance.toLocaleString('en-IN')); // set standard according to india region format