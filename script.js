'use strict';
/*
//Default Parameters
const bookings = [];
const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  //ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 800);
//skiping a parameter (use undefined)
createBooking('LH123', undefined, 800);
console.log(bookings);

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtman',
  passport: 24739479284,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 24739479284) {
    alert('Checked In!!');
  } else {
    alert('Wrong Passport!');
  }
};
//calling the function
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

//Is the same as doing ....
// const flightNum = flight;
// const passenger = jonas;
// console.log(flightNum, passenger);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};
newPassport(jonas);
checkIn(flight, jonas);


//Functions Accepting Callback Functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
-0;
//Higher-Order Function
const transformer = function (string, fn) {
  console.log(`Original string: ${string}`);
  console.log(`Transformed string: ${fn(string)}`);

  console.log(`Transformed by: ${fn.name}`);
};
transformer('JavaScript is The Best!', upperFirstWord);
console.log('##################################');
transformer('JavaScript is The Best!', oneWord);

const high5 = function () {
  console.log('Hiii ✋');
};
document.body.addEventListener('click', high5);

['benson', 'Jonas', 'daphne'].forEach(high5);


// Functions Returning Functions
//Normal Function
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

//Arrow Function Version 1
// const greet = greeting => {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
//Arrow Function Version 2
const greet = greeting => name => console.log(`${greeting} ${name}`);
//greeteHey is basically the Function returned by greet() functions
const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Benson');
// Or
greet('Hey')('Kioko');


const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //method
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      passengerName: name,
    });
  },
};
lufthansa.book(456, 'Benson Makau');
lufthansa.book(225, 'James Martin');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

//Regular Function: No Longer a Method thus the `this` keyword points to undefined
const book = lufthansa.book;

// book(23, 'Sarah Williams'); //Does not Work

//Solution
//The call() Method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Robert Burale');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 512, 'Ruth Daphne');
console.log(swiss);

//The apply() Method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData); // Better Option

//The bind() method
// book.call(eurowings, 23, 'Sarah Williams');

const bookEw = book.bind(eurowings);
// - e.g `book.bind(eurowings);` returns a new function
//where the `this` keyword is set to `eurowings`.
bookEw(123, 'Makau Benson');

const bookLH = book.bind(lufthansa);
bookLH(772, 'Caroline Shikwekwe');
const bookLX = book.bind(swiss);
bookLX(41, 'Partick Mwanthi');

//bind with parameters defined
// const bookEW23 = book.bind(swiss, 23);
// bookEW23('Makau Kiongozi');
// bookEW23('Purity Mathayo');

// const bookMakau = book.bind(swiss, 255, 'Cheregany Maseno');
// bookMakau();

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this); //<button class="buy">Buy new plane 🛩</button>
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial Application
const addTax = (rate, value) => value + value * rate;

// console.log(addTax(0.1, 200));
//use bind method to preset rate to always be 20%
const addVAT = addTax.bind(null, 0.23); //addVAT = value => value + value = 0.23;
console.log(addVAT(100));
console.log(addVAT(1000));
console.log(addVAT(250));
console.log(addVAT(320));

console.log('################################');
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);

console.log(addVAT2(100));
console.log(addVAT2(1000));
console.log(addVAT2(250));
console.log(addVAT2(320));
*/
///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, 
and an array with the number of replies for each option. 
This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1.
Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)

2. Call this method whenever the user clicks the "Answer poll" button.

3. Create a method 'displayResults' which displays the poll results. 
The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. 
If type is 'array', simply display the results array as it is, using console.log(). 
This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀


const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Wite Option number)`
      )
    );
    console.log(answer);
    //Register Answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
    // console.log(this.answers);
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      //Poll results are 13,2,4,1
      console.log(`Poll Results are ${this.answers.join(',')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
console.log(poll.answers);

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });


//Immediately Invoked Function Expressions(IIFE)

(function () {
  console.log('This will never run again!!');
})();

// Arrow function IIFE
(() => console.log('This also will never run again'))();


// Closures
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    //Update Passenger Count
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);
//console.dir()
//The method console.dir() displays an interactive list of the properties of the specified JavaScript object. The output is presented as a hierarchical listing with disclosure triangles that let you see the contents of child objects.
*/

//example 1 closures
let f;
const g = function () {
  const a = 23;
  f = function () {
    //function f can access value a of the g function even after g has finished execution.
    //a value is inside the backpack of f function
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    //function f can access value a of the g function even after g has finished execution.
    //a value is inside the backpack of f function
    console.log(b * 2);
  };
};
//invoking functions
g();
f();
console.dir(f);
// re assigning f function
h();
f();
console.dir(f);
