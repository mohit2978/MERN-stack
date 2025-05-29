// <div id="parent">
//     <div id="child">
//         <h1 >Heading1</h1>
//           <h1 >Heading2</h1>
//     </div>
// </div>
// </div>

const parent=React.createElement("div"
    ,{id:"parent"}
    ,React.createElement("div"
        ,{id:"child"},
       [ React.createElement("h1",{},"Heading from React"),
        React.createElement("h2",{},"Heading from React2"),]
    ));




const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);