let a = 1;

function demo() {
  var a = 2; // shadows outer a
  console.log(a); // 👉 2
}

demo();
console.log(a); // 👉 1