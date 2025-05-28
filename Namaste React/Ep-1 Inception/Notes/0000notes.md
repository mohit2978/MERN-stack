## Ep-1 Inception

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="root">
        <h1>Hi from Html</h1>
    </div>    
</body>
</html>
```
This is simple html we know !!This is in index.html!!

Now we want to do same by JS !!

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="root">

    </div>
    <script>
        let heading=document.createElement("h1");
        heading.innerHTML="Hello worldfrom JS";
        let el=document.getElementById("root");
        el.appendChild(heading);
    </script>
</body>
</html>
```
This is same we do in JS!!This is how we do in JS!!

can see Adding React by CDN in Kabir lectures!! can see template.html here below!!

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>

    <script type="text/babel"></script>
  </body>
</html>

```
 CDN is network where react library is hosted and we put them in our project!!

 Now what the links have??
  in 1st link can see various functions!! It's all plain JS code written by Fb developers!!


After you run that react app and in console you write REact you will get some object!!It  is core React!!

the 2nd link we have React-dom !! This is useful for DOM operations!!

Why 2 different links?? 
 React-dom is bridge bewteen React and Browser!! React is used for mobile for 3d and much more but we need for browser DOM!!


These two files have great algorithm in it!!

> In src tag  HTML we put sometimes crossorigin why??