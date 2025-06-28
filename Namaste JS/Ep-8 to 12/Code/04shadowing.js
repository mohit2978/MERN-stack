var x = "outer";

{
  var x = "inner"; // shadows outer x
  console.log(x); // 👉 "inner"
}

console.log(x);