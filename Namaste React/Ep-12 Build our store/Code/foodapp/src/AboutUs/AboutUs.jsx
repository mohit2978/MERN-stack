import UserCard from "./UserCard.jsx";
import UserClass from "./UserClass.jsx";
import React from "react";
import UserContext  from "../utils/UserContext.js";

class AboutUs extends React.Component {

    constructor(props) {
        super(props);

    }
 render() {

     return (
       // <UserContext.Provider value={{user:"Mohit Kumar"}}>
           <div>
               <h1>About us</h1>
               <h2>namaste</h2>
               <UserContext.Consumer>
                   {({user})=><h3>{user}</h3>}
               </UserContext.Consumer>
               <UserCard name={"Mohit Kumar(fn)"} />
               <UserClass name={"Mohit Kumar(class)"}
                          location={"FBD"}/>
           </div>
       // </UserContext.Provider>
     );
 }
};

export default AboutUs;
