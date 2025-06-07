# Ep-1

Jeff Atwood --> founder of stack overflow!! 

`Any application that can be written in JS, will eventually be written in JS`

`Nodejs is JS run-time  built on Chrome's V8 Js engine`!! We will see it later in detail!!

Nodejs executes JS code outside browser!!

Js is always lanaguage dominated on web browser!! JS is core of web and web browser! Node.js helps to run JS everywhere , not only limited to browser!!

`Nodejs has event driven architecture capable of asynchronous I/O or non-blocking I/O`

Nodejs was released in 2009 by `Ryan Dahl`!!

To run JS we need JS engine!! so whereever there is JS there will be JS engine!! Ryan Dahl started  with `Spider Monkey` Firefox Js engine !! 

`Every browser has it's own JS engine . Google Chrome has JS engine called V8`

In 2 days Ryan was done by Spider Monkey ,he moved to V8 and never looked back!!

There was a compnay called as `Joyent` which was soing something similar . running JS on server!! So `Joyent` got Ryan Dahl as employee so both developed node js!!

First few packages was mainatianed and used by `Joyent` internally!!

Ryan gave it name as `web.js`as it was used for creating web servers!! 
But later on he realised potential so he renamed as `node.js`!!

## Why we need nodejs??

Initially we have Apache Http Server which was a blocking server !! And Ryan wanted a `Non-blocking I/O`!! Non-blockig I/O can handle more request with less number of threads!! 

In 2010 ,npm(Pacakage manager for node) happened, a developer from `Joyent` created npm so that other devloper can create and use packages created by other user!! `Node.js should not be so successful if npm was not there!!`

Initially node.js was only build for macOs and linux and in 2011 `Joyent`
with `Microsoft` build it for Windows !! 

In 2012 ,Ryan left the project and Isaac (creator of npm) took over the project!! Now development of node.js become very slow!!

In 2014 a devloeper `Fedor` created fork(clone) of node.js and named as io.js as node.js was open-source!! 

In 2015 both io.js and node.js get merged as A node.js foundation was formed!! Actual node.js that we use today is merger of node.js and io.js !!

In 2019 the commitee js foundation and node.js foundation merged and formed commitee OpenJS foundation and took control over node.js!! So openJs mainatins Node.js!!


#  Episode 1 Summary 

## **Chapter 01: Introduction to Node.js**  

### **1. What is Node.js?**  
- **Node.js** is a JavaScript runtime environment built on Chrome's **V8 engine**.  
- It allows JavaScript to run outside the browser, making it a powerful tool for various applications beyond web development.  

### **2. Key Features of Node.js**  

#### **a) Runtime Environment**  
- Node.js provides a **runtime environment** to execute JavaScript code outside the browser.  
- It is powered by the **V8 engine**, the same engine used in Google Chrome.  

#### **b) Event-Driven Architecture**  
- Node.js follows an **event-driven architecture**, efficiently handling asynchronous operations.  
- This design allows it to manage multiple tasks without waiting for one to complete before starting another.  

#### **c) Asynchronous I/O (Non-blocking I/O)**  
- Node.js performs **asynchronous I/O operations**, meaning tasks like reading/writing files or making network requests do not block the execution of other operations.  
- This is different from traditional synchronous programming, where tasks are executed sequentially.  

### **3. Development History of Node.js**  

#### **a) Creation and Early Development**  
- **Ryan Dahl** developed Node.js in **2009**.  
- Initially, he experimented with **SpiderMonkey**, Mozilla’s JavaScript engine, but later adopted Google’s **V8 engine** for its performance.  
- The project was originally named **web.js** but was later renamed **Node.js** to reflect its broader potential.  

#### **b) Support from Joyent**  
- **Joyent**, a technology company, saw potential in Node.js and supported its development.  

### **4. Comparison with Traditional Servers**  
- Before Node.js, most web servers used the **Apache HTTP Server**, which followed a **blocking I/O** model, limiting the number of concurrent connections.  
- Node.js introduced a **non-blocking I/O** model, allowing it to handle multiple requests efficiently with fewer system resources.  

### **5. The Evolution of NPM (Node Package Manager)**  
- **NPM** is a package manager for Node.js, allowing developers to install and manage libraries easily.  
- Developed by **Joyent** in **2010**, it was initially available for **macOS and Linux**.  
- In **2011**, Microsoft collaborated to bring NPM to **Windows**.  

### **6. Leadership and Community Transitions**  

#### **a) Leadership Changes**  
- In **2012**, **Ryan Dahl** stepped down, and **Isaac Z. Schlueter**, the creator of NPM, took over Node.js development.  

#### **b) The io.js Fork and Reunification**  
- In **2014**, due to internal disagreements, **Fedor Indutny** forked Node.js and created **io.js**.  
- In **2015**, the Node.js and io.js communities resolved their conflicts, merging back into a single project.  

#### **c) Formation of the OpenJS Foundation**  
- By **2019**, the **JS Foundation** and **Node.js Foundation** merged, forming the **OpenJS Foundation**, ensuring long-term community-driven development.  

### **7. Present and Future of Node.js**  
- Node.js continues to evolve with strong community support, making it one of the most popular JavaScript runtimes.  
- Its ecosystem, powered by **NPM**, provides a vast collection of libraries for building scalable and efficient applications.  

---









