# Redux Ep-12 Let's Build our store

Redux is not mandatory ,small or medium-sized application no need of redux ,but huge application needs Redux!!!`All application build using Redux can be built without Redux`!!

Redux is separate Library and React is separate so we need to install Redux in React!!

Redux is not the only library for managing state there are other like `Zustand`!!

Redux makes application easy to debug!!We have `Redux dev tools`!!

Redux is not only used with React but popularly used with React!!

There are two libraries redux offers

1. React-Redux --> bridge between react and redux!!
2. Redux toolkit (RTK)--> newer way to write redux!!Only Redux(Vanilla Redux) was complicated ,Reduc ToolKit made it bit easier!! Vanilla Redux require too much of boilerPlate code now after Redux toolkit removes boiler plate code!!

old way is called as `React Redux` or `Vanilla Redux`!!

new way ois to use with `Redux Toolkit`!!

Now we will devlop Cart!! Like we have cart on swiggy!!

## Architecture of Redux-toolkit
 
 We use word `Redux` for `Redux-toolkit` from now!!

 ![alt text](<Namaste React_250620_004154_1.jpg>) 
 ![alt text](<Namaste React_250620_004154_2.jpg>) 
 ![alt text](<Namaste React_250620_004154_3.jpg>)


## What we gonna do?

 ####  Redux ToolkitAdd commentMore actions
  - Install @reduxjs/toolkit (@ and / are there in name of RTK library) and react-redux (2libraries to install)
  - Build our store
  - Connect our store to our app
  - Slice (cartSlice)
  - dispatch(action) --> to write to Store
  - Selector --> to read from Store

installed both see package.json 

```json
  "dependencies": {
    "@reduxjs/toolkit": "^2.8.2",
    "@tailwindcss/vite": "^4.1.10",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-redux": "^9.2.0",
    "react-router": "^7.6.2",
    "react-router-dom": "^7.6.2",
    "tailwindcss": "^4.1.10"
  },
```







