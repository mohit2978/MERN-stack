import ReactDOM from "react-dom/client";

let number=12;

const spanTag=<span>Hi from span</span>

// const titled=(
//     <h1>Hello from react element{spanTag}</h1>
// )

const HeadingComponent=()=>{
    return <h1>heading component</h1>;
}

// const HeadingComponent1=function() {
//     return( <div id="parent">
//         <HeadingComponent/>
//         <h2>Number={number*100}</h2>
//         {titled}
//         <h1>From heading component 1</h1>
//     </div>);
// }

const titled1=(
    <div>
        <h1>Hello from react element{spanTag}</h1>
        <HeadingComponent/>
    </div>
);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(titled1);