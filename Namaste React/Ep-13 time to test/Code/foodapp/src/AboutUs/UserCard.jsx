import {useContext} from "react";
import UserContext from "../utils/UserContext.js";

const UserCard = ({name}) => {

    const userProp=useContext(UserContext);
    const {user,setUser}=userProp;
    console.log("user props is");
    console.log(userProp)
    console.log(setUser);


    return (
        <div className="UserCard">
            <h3>Name :{name}</h3>
            <h3>Location:FBD</h3>
            <div>
                <input className={"border border-red-700"} type="text" placeholder="Your Email"
                       value={user}
                onChange={(e) => setUser(e.target.value)}/>
            </div>
        </div>
    )
}

export default UserCard;