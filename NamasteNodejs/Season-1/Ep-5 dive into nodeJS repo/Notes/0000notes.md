# Notes Ep-5

Inside Nodejs we have v8 engine!!

In JS we can define function inside a fucntion ,but the varibles inside function cannot be accessed outside the function!!

```js
function outerFunction() {
    let a=10;
  console.log("I am the outer function");

  function innerFunction() {
    console.log("I am the inner function");
  }

  innerFunction(); // Call inner function
}

outerFunction();

```
Variable a of outerFunction cannot be accessed outside!!

The inner function has access to variables in the outer function.

```js
function outerFunction() {
  let outerVariable = "I'm from outer";

  function innerFunction() {
    console.log(outerVariable); // Has access
  }

  innerFunction();
}
outerFunction();
```
The inner function "remembers" the outer function's variables even if outer has finished running.This is called `closure`

```js
function outerFunction() {
  let count = 0;

  return function innerFunction() {
    count++;
    console.log("Count is", count);
  };
}

const counter = outerFunction(); // counter is now innerFunction
counter(); // Count is 1
counter(); // Count is 2

```
Like function inner variable and fucntion are not accesible!!
We have seen Variable a of outerFunction cannot be accessed outside!! like that in module we have everything written inside a function!!So you cannot access module variable and fucntion outside module!!

Only way is `module.exports`!!

>Note: all the code of module is wrapped inside a function!! 

Now the function wrapping other function and variables called as `Immediately Invoked Function Expression(IIFE)`!!

Basically created a fucntion and immediately called it on the fly!!

ex:

```js
(function() {
  // Code here runs immediately
  console.log("IIFE executed!");
})();
```

Output:`IIFE executed!`

or can use 

```js
(() => {
  console.log("Arrow IIFE executed!");
})();
```

Another ex

```js
const counter = (function() {
  let count = 0;
  return {
    increment: () => ++count,
    getCount: () => count
  };
})();

console.log(counter.increment()); // 1
console.log(counter.getCount());  // 1

```
The IIFE returns an object with two methods:

increment-->	Increases count by 1 and returns it

getCount-->	Returns the current value of count

Similarly 

```js
{
    ()=>{
        //All module code comes up here
    }
}()
```
Nodejs wraps module code inside IIFE before giving it to V8!!So which keeps variables and function safe!! So outside code does not effect code of module!!

> Note:IIFE is an anonymous function (no name) immediately invoked!!





























