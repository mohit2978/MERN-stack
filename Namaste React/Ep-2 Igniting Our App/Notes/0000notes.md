# Ep-2 Igniting Our App

is the code we have written ready to push to production? we do not wnt unneccessary comments!!
I want to bundle up file ,compress them and optimize the files before going to production!!

We will create `create React app` fom where all the production ready React application comes!!

React alone cannot make production ready app !! There are a lot of other things we need to make our application fast!!

### npm (Node package manager)

npm does not stands for node package manager!! `On official website ,it is everything except Node pacakge manager!!` 

>Note:npm does not have full form !!

`npm manages packages but it has no full form!!`

npm is standard repository for standard repository!!Any pacakge you want to include in project can be imported from npm!!

`create react app` already has npm in it!!

In code we have ex2 of previous class  let us do ,`npm init` on that!!

>Note"do not do `npm init -y` as it will skip a lot of things !!

```sh
PS C:\Users\user\Desktop\Programs\MERN-stack\Namaste React\Ep-2 Igniting Our App\Code\ex2nestedElements> npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (ex2nestedelements) namasteProject
Sorry, name can no longer contain capital letters.
package name: (ex2nestedelements) namaste_project
version: (1.0.0)                                                                                                                                                                                                                    
description: first project                                                                                                                                                                                                          
entry point: (app.js)                                                                                                                                                                                                               
test command: jest                                                                                                                                                                                                                  
git repository:                                                                                                                                                                                                                     
keywords: namaste project
author: Mohit                                                                                                                                                                                                                       
license: (ISC)                                                                                                                                                                                                                      
About to write to C:\Users\user\Desktop\Programs\MERN-stack\Namaste React\Ep-2 Igniting Our App\Code\ex2nestedElements\package.json:

{
  "name": "namaste_project",
  "version": "1.0.0",
  "description": "first project",
  "main": "app.js",
  "scripts": {
    "test": "jest"
  },
  "keywords": [
    "namaste",
    "project"
  ],
  "author": "Mohit",
  "license": "ISC"
}


Is this OK? (yes) y

```

Then we see package.json is created

```json

{
  "name": "namaste_project",
  "version": "1.0.0",
  "description": "first project",
  "main": "app.js",
  "scripts": {
    "test": "jest"
  },
  "keywords": [
    "namaste",
    "project"
  ],
  "author": "Mohit",
  "license": "ISC"
}

```
This is what we have given!!

>Note:package.json is configuration for npm!!
