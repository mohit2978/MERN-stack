import UserCard from "./UserCard.jsx";
import UserClass from "./UserClass.jsx";

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

export default AboutUs;
