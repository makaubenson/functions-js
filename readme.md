# FUNCTIONS

### Default Parameters

- In ES5 way
- `const createBooking = function (flightNum, numPassengers, price) { //ES5 numPassengers = numPassengers || 1; price = price || 199; }`
- ES6
- `const createBooking = function (flightNum, numPassengers = 1, price = 199) {}`
- Default expressions can contain any expression eg. `199*1.2` etc or even be set to the value of other parameters set before it.
- e.g const createBooking = function (flightNum, numPassengers = 1, `price = 199 + numPassengers) {}`
- `numPassengers itself is a parameter`
- We can skip params while calling a functions. Its better parsing `undefined` on the place of the param.
- setting a parameter as `undefined` is similar to not even setting it

### How Parsing Arguments Works

-
