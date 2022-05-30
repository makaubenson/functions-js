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
*/

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
