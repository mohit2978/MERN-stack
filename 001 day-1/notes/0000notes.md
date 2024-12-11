# Lecture 1 Kabir

## Prerequisite to learn react
![alt text](image.png)

React is a library not a framework!!

![alt text](image-1.png)

In Java we have package and in JS we have library!! both are same 

React is just predefined package devleoped in JS only!! like util in Java!!

React is used to create UI only!!

>Note:With React you cannot create Frontend Application as cannot send request server ,data management!! 

To create frontend application we need some other libraries like axios ,React-DOM!!

# Lecture 2
UI is collection of UI components ,this UI components help to interact with software!!

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Button using HTML</title>
  </head>
  <body>
    <h2>Button in HTML</h2>
    <button>HTML Button</button>
  </body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JS Button</title>
  </head>
  <body>
    <h2>Javascript Button</h2>
    <script>
      //code to create a Button
      var buttonDomElement = document.createElement("button");
      //<button></button>

      buttonDomElement.innerText = "Javascript Button";
      //<button>Javascript Button</button>

      //Add the Button in the DOM
      document.querySelector("body").appendChild(buttonDomElement);
    </script>
  </body>
</html>
```

```html
<!DOCTYPE html>
<html>
  <head>
    <title>List in HTML</title>
  </head>
  <body>
    <h2>List in HTML</h2>
    <ol>
      <li>Apple</li>
      <li>Samsung</li>
      <li>Oppo</li>
      <li>Oneplus</li>
    </ol>
    <ol>
      <li>Apple</li>
      <li>Samsung</li>
      <li>Oppo</li>
      <li>Oneplus</li>
    </ol>
    <ol>
      <li>Apple</li>
      <li>Samsung</li>
      <li>Oppo</li>
      <li>Oneplus</li>
    </ol>
    <ol>
      <li>Apple</li>
      <li>Samsung</li>
      <li>Oppo</li>
      <li>Oneplus</li>
    </ol>
    <ol>
      <li>Apple</li>
      <li>Samsung</li>
      <li>Oppo</li>
      <li>Oneplus</li>
    </ol>
    <ol>
      <li>Apple</li>
      <li>Samsung</li>
      <li>Oppo</li>
      <li>Oneplus</li>
    </ol>
    <ol>
      <li>Apple</li>
      <li>Samsung</li>
      <li>Oppo</li>
      <li>Oneplus</li>
    </ol>
  </body>
</html>

```
### Js list
```html
<!DOCTYPE html>
<html>
  <head>
    <title>List using JS</title>
  </head>
  <body>
    <h2>List in Javascript</h2>
    <script>
      function createList() {
        var olDomElement = document.createElement("ol"); //<ol> </ol>

        var liDomElement1 = document.createElement("li");
        var liDomElement2 = document.createElement("li");
        var liDomElement3 = document.createElement("li");
        var liDomElement4 = document.createElement("li");

        olDomElement.appendChild(liDomElement1); //<ol><li></li></ol>
        olDomElement.appendChild(liDomElement2);
        olDomElement.appendChild(liDomElement3);
        olDomElement.appendChild(liDomElement4);

        liDomElement1.innerText = "Apple"; //<li>Apple</li>
        liDomElement2.innerText = "Samsung";
        liDomElement3.innerText = "Vivo";
        liDomElement4.innerText = "OnePlus";

        //Add OrderedList with ListItems in the DOM
        document.querySelector("body").appendChild(olDomElement);
      }

      createList();
      createList();
      createList();
      createList();
      createList();
      createList();
    </script>
  </body>
</html>

```