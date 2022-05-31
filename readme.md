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

### Why Js uses callback functions all the time

- Makes its easy to split code into chunks of reusable code
- callback functions allow us to create abstraction. - Hiding details of code implimentation.

### Explicitly Using `this` Keyword for different methods.

#### The `call() method`

- Original Method
- `const lufthansa = { airline: 'Lufthansa', iataCode: 'LH', bookings: [], //method book(flightNum, name) { console.log( `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}` ); this.bookings.push({ flight:`${this.iataCode}${flightNum}`, passengerName: name, }); }, };`

- Next Method intending to borrow the `book` method using the `call() method`
- `const swiss = { airline: 'Swiss Air Lines', iataCode: 'LX', bookings: [], }; `
- `book.call(swiss, 512, 'Ruth Daphne');`
- `console.log(swiss);`

#### The `apply() method`

- Works similar to `call() method`.
- Difference is `apply()` does not receive list of arguments after the `this` keyword. but instead it takes an array of arguments.
- Creating an array
- `const flightData = [583, 'George Cooper'];`
- Parse array inside apply method instead of arguments
- `book.apply(swiss, flightData);`
- `console.log(swiss);`
- `apply()` is not very much used in the modern js since there are plenty of tools which can do its job. e.g `book.call(swiss, ...flightData);` can be used instead of `book.apply(swiss, flightData);`

#### The `bind() method`

- Allows us to set us the `this` keyword for any function call
- The difference from `call() method` is that,`bind() method` does not immediately call the function but instead it `returns new function where the this keyword is bound`.
- e.g `book.bind(eurowings);` returns a new function where the `this` keyword is set to `eurowings`.

#### bind with parameters already defined

- `const bookEW23 = book.bind(swiss, 23);`
- `bookEW23('Makau Kiongozi');`
- `bookEW23('Purity Mathayo');`

- `const bookMakau = book.bind(swiss, 255, 'Cheregany Maseno');`
- `bookMakau();`

#### Partial Application

- Means we can preset parameters.
- `const addTax = (rate, value) => value + value * rate;`
- use bind method to preset rate to always be 20%
- `const addVAT = addTax.bind(null, 0.23);`
- `console.log(addVAT(100)); `
- `console.log(addVAT(1000));`

### Immediately Invoked Function Expressions(IIFE)

- Functions that disappers right after it is called once.
- `const runOnce = function () { console.log('This will never run again'); };`
- The function above can be run once, but another time in future it may be called. `This is NOT IIFE`
- We want to execute a function immediately and not even save it anywhere.
- To write a IIFE `(function () { console.log('This will never run again!!'); })();`
- We wrap the function under brackets to tell js its an expression, then add `()` after the brackets to call it.

### Arrow function IIFE

- `(() => console.log('This also will never run again'))();`

### Closures

- Not an feature we explicitly use like arrays or function.
- We dont manually create closures, closures simpley happen at certain situations.
- A function always has access to the variable environment of the execution context in which it was created even after after that execution context is gone.
- closure is basically the variable environment attached to the function, exactly as it was at the time and place the function was created.
- ![image](https://user-images.githubusercontent.com/59168713/171146124-0b52b3b7-541c-4dbf-a41a-4246be636aaa.png)

#### Closure Definitions

- A closure is the closed over `variable environment` of the `execution context` in which a function was created, `even after that execution context is gone.`

- A closure gives a function access to all the variables of its parent function even after that parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughout time.

- A closure makes sure that a function doesnt loose connection to variables that existed at the function's birth place.

- A closure is like a backpack that a function carries around whenever it goes. This bagpack has all variables that were present in the environment where the function was created.

- Whenever a variable cant be found in the function scope, js looks in the closure and picks it from there.

### console.dir()

- The method `console.dir()` displays an interactive list of the properties of the specified JavaScript object. The output is presented as a hierarchical listing with disclosure triangles that let you see the contents of child objects.

- In other words, `console.dir()` is the way to see all the properties of a specified JavaScript object in console by which the developer can easily get the properties of the object.

### Timers

- `setTimeout()` requires 2 parameters, first `function` and `time in milliseconds`. See example below
- `setTimeout(function () { console.log('Hello, 1 sec is over'); }, 1000); `
- The function will be executed after the set time period
- Closures have priority over scope chain.
