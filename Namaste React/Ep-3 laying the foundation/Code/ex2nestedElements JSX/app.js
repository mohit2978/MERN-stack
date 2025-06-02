
import React from "react";
import ReactDOM from "react-dom/client";




const HeadingComponent=()=>{
    return <h1>heading component</h1>;
}

const HeadingComponent1=()=>(
         <div id="parent">
            <HeadingComponent/>
            <h1>From heading component 1</h1>
        </div>
     )


const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent1/>);