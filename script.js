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
*/

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
