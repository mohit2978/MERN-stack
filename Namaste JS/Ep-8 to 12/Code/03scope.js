{
  var a = 5;

  function test() {
    var a = 10; // ✅ Works here, no error
    console.log(a); // 👉 10
  }

  test();
  console.log(a); // 👉 5
}
