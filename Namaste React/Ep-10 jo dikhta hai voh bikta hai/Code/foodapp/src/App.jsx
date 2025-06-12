
import './App.css'
import Header from "./Header/Header.jsx";
import {Outlet} from "react-router";

function App() {
  return (
    <>
      <Header />
        <Outlet />
    </>
  )
}



export default App
