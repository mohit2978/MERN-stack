import "./footer.css"
import {useState} from "react";

function Footer() {
     var [count, setCount] = useState(0);
    var [state, setState] = useState(0);
    console.log("re-rendered");
     function  incrCount(){
         setCount((prevState)=>{
             return prevState + 1;
         });

         setCount((prevState)=>{
             return prevState + 1;
         });

         setCount((prevState)=>{
             return prevState + 1;
         });
    }
    return (
        <>
        <div className="footer">Count value is {count}</div>
            <div>{state}</div>
        <button onClick={incrCount}>Count</button>
        </>
    )
}
export default Footer