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




































