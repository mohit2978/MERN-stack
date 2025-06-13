import {useEffect, useState} from "react";

const useOnlineStatus=()=>{
    const [onlineStatus,setOnlineStatus]=useState(true)

    //check online or offline
    useEffect(()=>{
        console.log("Useffect called")

        const handler = () => {
            console.log("online called");
            setOnlineStatus(true);
        };

        const offlineHandler=()=>{
            console.log("offline called");
            setOnlineStatus(false);
        }

        window.addEventListener('online',handler)

        window.addEventListener('offline',offlineHandler)

    },[]);
    //return true or false
    return onlineStatus;
}

export default useOnlineStatus;