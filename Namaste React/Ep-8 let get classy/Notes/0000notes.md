# Ep-8 Let get classy 

Class based component is older way to create React component!! Till now we were using Functional component!!
But in legacy application and in interviews ,Class based ocmponents are widely used!!

Now we will make our about us page a class compnent!! we will remove old about us page!!

See our about us page!!

```jsx
const AboutUs = () => {

    return (
        <div>
           <h1>About us</h1>
            <h2>namaste</h2>
        </div>
    );
};

export default AboutUs;
```

![alt text](image.png)

This we are going to make class component!! Here we will get data !!We wil put data for users who helped in creation of website !! So we create UsersCard!!

see userCard as functional component 

```jsx

const UserCard = () => {
    return (
        <div className="UserCard">
            <h3>Name Mohit Kumar</h3>
            <h3>Location:FBD</h3>
        </div>
    )
}

export default UserCard;

```
## Class Component 
Now we are gonna make same fucntional compnent as class compoenent!!

```jsx
class UserClass extends React.Component {
        render() {
            return (
                <div className="UserCardClass">
                    <h3>Name Mohit Kumar</h3>
                    <h3>Location:FBD</h3>
                </div>
            )
        }
 }

  export default UserClass;
```

We neeed to extend React.component and then in render() we return  Jsx!!

` Class component is js class extends React.component which returns jsx in render() fucntion`

`Function component is a js Function that returns some JSX` 

can see difference between two above!!

React.Component is coming from react!!

How to use see below !!

```jsx
import UserClass from "./UserClass.jsx";

const AboutUs = () => {

    return (
        <div>
           <h1>About us</h1>
            <h2>namaste</h2>
            <UserClass/>
        </div>
    );
};

export default AboutUs;


```

![alt text](image-1.png)

We have applied different CSS on class This useCardClass so green border!!

just chnage of little syntax!!

Now we want to pass props to class component!!

### Props in class component

let us show both in the UI!!

![alt text](image-2.png)

 black one functional component and green one class component!!

Now we want to pass props!!

To get props in class based component we need to create constructor and put super(props).

`For using props we need to use this.props.name`

```jsx

class UserClass extends React.Component {
        constructor(props) {
            super(props);
            console.log(props)
        }

        render() {
            return (
                <div className="UserCardClass">
                    <h3>Name {this.props.name}</h3>
                    <h3>Location:FBD</h3>
                </div>
            )
        }
 }

 export default UserClass;

```

This is how we use in class based and below can see in fucntional component!!

```jsx
const UserCard = ({name}) => {
    return (
        <div className="UserCard">
            <h3>Name :{name}</h3>
            <h3>Location:FBD</h3>
        </div>
    )
}

export default UserCard;
```
 see aboutus.jsx,how we are calling the two components!!
 ```jsx

const AboutUs = () => {

    return (
        <div>
           <h1>About us</h1>
            <h2>namaste</h2>
            <UserCard name={"Mohit Kumar(fn)"} />
            <UserClass name={"Mohit Kumar(class)"}/>
        </div>
    );
};

export default AboutUs;

```
![alt text](image-3.png)


Now similrly we can pass location!!

```jsx
class UserClass extends React.Component {
        constructor(props) {
            super(props);
            console.log(props)
        }

        render() {
            return (
                <div className="UserCardClass">
                    <h3>Name {this.props.name}</h3>
                    <h3>Location:{this.props.location}</h3>
                </div>
            )
        }
 }
```

Aboutus component

```jsx
const AboutUs = () => {

    return (
        <div>
           <h1>About us</h1>
            <h2>namaste</h2>
            <UserCard name={"Mohit Kumar(fn)"} />
            <UserClass name={"Mohit Kumar(class)"}
            location={"FBD"}/>
        </div>
    );
};
```
All this things will be combined in one object called props !! now we can even  destructure and get in UserCarcClass!!Like bwelow!!

```jsx

import React from "react";

class UserClass extends React.Component {
        constructor(props) {
            super(props);
            console.log(props)
        }

        render() {

            const {name,location}=this.props;
            return (
                <div className="UserCardClass">
                    <h3>Name {name}</h3>
                    <h3>Location:{location}</h3>
                </div>
            )
        }
 }

```

We know how to use state varible in Functional component , lt us see how we can use it in Class based component!!

Invoking a function component is same as mounting a fucntional component !!!

Loading a class based component means creating instance of that class!!

so to create state variables in class-based componnts ,we define them in constructor!!Earlier there was no hooks so we use a different way here!!

### State variable in class component

we define it inside a state variable!!

```jsx
class UserClass extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                count:1,
            }
        }

        render() {

            const {name,location}=this.props;
            return (
                <div className="UserCardClass">
                    <h3>Name {name}</h3>
                    <h3>Location:{location}</h3>
                    <h4>Count ; {this.state.count}</h4>
                </div>
            )
        }
 }


```
![alt text](image-4.png)

we can detructure it too !!

we know how to create two or more state variable inside functional component !!Now we want to create multiple  state variable in class based componet so we will create it inside state variable only!! 

```jsx
import React from "react";

class UserClass extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                count:1,
                count2:2,
            }
        }

        render() {

            const {name,location}=this.props;
            const{ count,count2 } = this.state;
            return (
                <div className="UserCardClass">
                    <h3>Name {name}</h3>
                    <h3>Location:{location}</h3>
                    <h4>Count :{count} count 2 : {count2}</h4>
                </div>
            )
        }
 }


```
![alt text](image-5.png)

### Updating state variable in Class component

```jsx
class UserClass extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                count:1,
                count2:2,
            }
        }

        render() {

            const {name,location}=this.props;
            const{ count,count2 } = this.state;
            return (
                <div className="UserCardClass">
                    <h3>Name {name}</h3>
                    <h3>Location:{location}</h3>
                    <h4>Count :{count} count 2 : {count2}</h4>
                    <button OnClick={()=>{
                            this.state.count=this.state.count+1;
                    }}>Click here</button>
                </div>
            )
        }
 }

```

this is wrong ,never do it like this!! Never put `=` in state variable and then assign some value !!

>Note:Never do it directly!!

so react give a function called as `this.setState()`!!In this method we give object!!


```jsx

class UserClass extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                count:1,
                count2:2,
            }
        }

        render() {

            const {name,location}=this.props;
            const{ count,count2 } = this.state;
            return (
                <div className="UserCardClass">
                    <h3>Name {name}</h3>
                    <h3>Location:{location}</h3>
                    <h4>Count :{count} count 2 : {count2}</h4>
                    <button onClick={()=>{
                            this.setState({
                              count:this.state.count+1,
                                count2:this.state.count2+2,
                    });
                    }}>Click here</button>
                </div>
            )
        }
 }

 export default UserClass;

```

This is how we set both these variables and increment them in class based component!!

Each time component is re-rendered when count is increased!! 

>Note:if we have only updated count and not count2 in setState ,count2 will not be updated !! only the ones we try to update will be updated!!

### Life-cycle of class based component!!

How this class-based component is mounted(loaded) on webpage??


