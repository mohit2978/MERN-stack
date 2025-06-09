import UserCard from "./UserCard.jsx";
import UserClass from "./UserClass.jsx";
import React from "react";

class AboutUs extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }
 render() {

     return (
         <div>
             <h1>About us</h1>
             <h2>namaste</h2>
             <UserCard name={"Mohit Kumar(fn)"} />
             <UserClass name={"Mohit Kumar(class)"}
                        location={"FBD"}/>
         </div>
     );
 }
};

export default AboutUs;
