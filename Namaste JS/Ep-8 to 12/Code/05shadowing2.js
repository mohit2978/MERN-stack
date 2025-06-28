{
  var a = 5;

 {
    var a = 10; // ✅ Works here, no error
    console.log(a); 
  }

  console.log(a); // 👉 5
}
