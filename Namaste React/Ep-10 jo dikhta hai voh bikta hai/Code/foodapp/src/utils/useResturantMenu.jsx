import {useEffect, useState} from "react";

const  useResturantMenu=(resName)=>{

    const [resInfo,setResInfo]=useState(null);

    useEffect(()=>{fetchdata()},[]);

    const fetchdata = async()=> {
        const data=await fetch(`http://localhost:8080/api/res/getMenu?name=${resName}`);
        const json=await data.json();
        setResInfo(json);
        console.log(json);
    }
    return resInfo;
}


export default useResturantMenu;