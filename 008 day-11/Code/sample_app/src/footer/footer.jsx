import "./footer.css"
import {useState} from "react";

function Footer() {
     var [count, setCount] = useState(0);

     function  incrCount(){
         setCount(count + 1);
    }
    return (
        <>
        <div className="footer">Count value is {count}</div>
        <button onClick={incrCount}>Count</button>
        </>
    )
}
export default Footer