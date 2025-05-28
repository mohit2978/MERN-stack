// <div id="parent">
//     <div id="child">
//         <h1 id="heading">Heading</h1>
//
//     </div>
// </div>
// </div>

const parent=React.createElement("div"
    ,{id:"parent"}
    ,React.createElement("div"
        ,{id:"child"},
        React.createElement("h1"
            ,{id:"heading",xyz:"abc"}
            ,"Heading from React")));




const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);