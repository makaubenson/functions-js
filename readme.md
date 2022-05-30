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

- `NOTE:` Javascript `DOES NOT` have `parsing by reference`, only `parsing by value`.

#### Parsing by Value Js

- \*\*\*-----------------

### First Class Vs Higher-Order Functions

#### First Class Functions

- Js treats functions as `first-class citizens`
- This means that functions are simply treated as values.
- Functions are just another 'type' of object.
- Since objects are values, the functions are values too.
- We can store functions in variables e.g `const add = (a,b) = a + b`.
- We can parse methods as arguments to other functions. e.g in `eventListeners`
- We can `return` functions FROM functions
- Functions are objects. and since Objects have methods. e.g array methods. There are function methods too- meaning we can call methods on functions

#### Higher-Order Functions

- A function that receives another function as an argument or that returns a new function or both.
- This is only possible because of the first class functions.
- `const greet = () = console.log('Hey Benson');`- Function
- `btnClose.addEventListener('click',greet)`
- `addEventListener()` is the high-order function since it receives the `greet` function.
- Function that is parsed in, is called a `callback` function.

##### Functions that return functions

- `function count(){ let counter = 0; return function (){ counter ++; } }`
- There are NO `First Class functions` in practice, its just a concept however, there are High-Order Functions
