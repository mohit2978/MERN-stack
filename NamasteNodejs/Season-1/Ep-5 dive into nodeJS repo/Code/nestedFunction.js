function outerFunction() {
    let a=10;
  console.log("I am the outer function");

  function innerFunction() {
    console.log("I am the inner function");
  }

  innerFunction(); // Call inner function
}

outerFunction();