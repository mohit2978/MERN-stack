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

Now we use above code to create h1 !!

```html
<!DOCTYPE html>
<html>
  <head>

  </head>
  <body>
    <div id="root">

    </div>
      <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
      <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
      <script>
        const heading=React.createElement("h1",{},"Hello from React");

        const root=ReactDOM.createRoot(document.getElementById("root"));

        root.render(heading);
      </script>
    <script type="text/babel"></script>
  </body>
</html>


```

![alt text](image.png)

>see we getting h1 inside root!!

createRoot comes from ReactDOM !!

createElemenet comes from React!!1st parameter is tag 2nd is attributes and 3rd is the content inside tag!!

eg we want id heading in const heading 

`const heading=React.createElement("h1",{id:"heading",xyz:"abc"},"Hello from React");`
 we even giving custom tag like xyz!! The createElement returns a React Element!! REact Element is normal JS object!! It has children and attributes 

then we render heading into root!!


It is not a good practice to put all react code in here!!Put it in JS file!!

Can see ReactInSeparateJS file aboev in code section!!

>Note:The createElement returns a React Element!! REact Element is normal JS object!! It has property props which has children and attributes 

let us see that in ex1 folder

```html
<!DOCTYPE html>
<html>
  <head>

  </head>
  <body>
    <div id="root">
     
    </div>

    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="app.js"></script>
  </body>
</html>
```


```Javascript
const heading=React.createElement("h1"
    ,{id:"heading",xyz:"abc"}
    ,"Hello from React");

console.log(heading);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
```

Output:

![alt text](image-1.png)

can see props here!!

Render() function takes React element as input !! when we do `root.render(heading)` heading and root both are React elememts!! render converts heading element to h1 tag and put on DOM!!


React was build was philosophy to manipulate DOM with JS!! Manipulating DOM is very costly !! React makes the manipulation of DOM very effeciently!!


Now we want nested elements!!see ex2

we will use 3rd parameter of createElement() and put nested createElement as 3rd parameter is content !!

```javascript
const parent=React.createElement("div"
    ,{id:"parent"}
    ,React.createElement("div"
        ,{id:"child"},
        React.createElement("h1"
            ,{id:"heading",xyz:"abc"}
            ,"Heading from React")));




const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
```


![alt text](image-3.png)


We get what we wanted!!

Now we want siblings !! add multiple siblings !! can see ex3!!

so 3rd parameter we give as array !!

```javascript
const parent=React.createElement("div"
    ,{id:"parent"}
    ,React.createElement("div"
        ,{id:"child"},
       [ React.createElement("h1",{},"Heading from React"),
        React.createElement("h2",{},"Heading from React2"),]
    ));




const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

```

![alt text](image-2.png)

we are getting error 

![](image-4.png)

will see it later!!

This was core react!!!

 Now we see React.createElement is making code very complex for now!! so that's why we use JSX!!

now see 

```html
<!DOCTYPE html>
<html>
  <head>

  </head>
  <body>
    <div id="root">

      <script src="app.js"></script>
      <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
      <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
      
    </div>
  </body>
</html>
```

If we put `<script src="app.js"></script>` befoire CDN links !!Then our app will not work !!
Even the CDN links should be in order as we provided above!!

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Namaste React</title> 

    <!-- Injecting/Linking External CSS File -->
    <link rel="stylesheet" href="./index.css" />
  </head> 
  <body>
    <h1>Hello Top of Root</h1>

    <div id="root">
      <h1>Bharat is here!</h1>
    </div>
    
    <h1>Hello Below of Root</h1>
    

    <!-- Injecting React and ReactDOM CDN Link -->
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.production.min.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"
    ></script>


    <!-- Linking External JavaScript File -->
    <script src="./App.js"></script>    
  </body>
</html>

```

You see crossorigin with CDN links!!!
![alt text](image-5.png)

#### Now suppose we have already some tag in id="root" and then we render that and put some other things too using ReactDOm.render(). What will happen?

A: the old content will be replaced by whatever we have rendered by React!! Initially for some milliseconds we have old content and then root.render() will replace old content!!! As initally browser reads content from html so it preint old content !! But when app.js is executed and then in that root.render() will replace the old contet of root!!

Other part except root id will not be chnaged!!React only works in whatever you do render() !! Other parts will still be same!! So React is library as it can work in some peiece of code!! Framework is much bigger and have its own structure unlike library!! Framework cannot work in samll portion of app ,Library can like react!!

like we can put React on navbar only but Framework will be applied on whole project!!

## Q: Difference between a `Library and Framework`?
A: `React (Library):`

`Collection of Tools:` React is a JavaScript library for building user interfaces, especially for single-page applications.

`Your Control:` With React, you decide how to structure your application. You call the functions and methods provided by React to create components, manage state, and handle events.

`Example:` Using React is like having a set of tools (like hammers and nails) to build parts of your house (user interface) as you see fit. You are free to design the structure and layout.

`Next.js (Framework):`

`Structure and Tools:` Next.js is a framework built on top of React that provides a structured way to develop web applications. It includes additional features like server-side rendering, static site generation, and routing out of the box.

`Framework's Control:` With Next.js, the framework provides a defined structure for your application. It handles routing and rendering, and you plug your React components into this structure. The framework controls the flow and dictates certain conventions you need to follow.

`Example:` Using Next.js is like having a pre-designed house plan (framework) where the main structure is already determined (routing, rendering). You still build the rooms and decorate (using React components), but within the guidelines set by Next.js.

React gives you the flexibility to design your application as you wish, while Next.js offers a structured approach with additional features to streamline development.

## Q: What is difference between `React and ReactDOM`?
A: `React` is a JavaScript library for building User Interfaces whereas `ReactDOM` is also JavaScript library that allows `React to interact with the DOM`.
The react package contains `React.createElement()`, `React.Component`, `React.Children`, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components. The react-dom package contains `ReactDOM.render()`, and in react-dom/server we have server-side rendering support with `ReactDOMServer.renderToString()` and `ReactDOMServer.renderToStaticMarkup()`.

## Q: What is difference between `react.development.js` and `react.production.js` files via `CDN`?
A: `Development` is the stage of an application before it's made public while `production` is the term used for the same application when it's made `public`.
`Development build` is several times (maybe 3-5x) `slower` than the `production build`.


## Q: What is `CDN`? Why do we use it?
A: A `content delivery network (CDN)` refers to a geographically distributed group of servers that work together to provide fast delivery of Internet content.
The main use of a CDN is to deliver content through a network of servers in a secure and efficient way.


