
import './App.css'
import Header from "./Header/Header.jsx";
import {Outlet} from "react-router";
import {useEffect, useState} from "react";
import UserContext from "./utils/UserContext.js";
import appStore from "./utils/appStore.js";
import {Provider} from "react-redux";

function App() {

    const [user, setUser] = useState("Mkr");

    useEffect(() => {
        setUser("Deepak");
    },[])
  return (
      <Provider store={appStore}>
          <UserContext.Provider value={{user,setUser}}>
              <>
                  <Header />
                  <main className="mt-[150px]">
                      <Outlet />
                  </main>
              </>
          </UserContext.Provider>
      </Provider>
  )
}



export default App
