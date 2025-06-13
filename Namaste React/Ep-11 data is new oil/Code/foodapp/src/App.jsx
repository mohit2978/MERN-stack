
import './App.css'
import Header from "./Header/Header.jsx";
import {Outlet} from "react-router";

function App() {
  return (
    <>
      <Header />
      <main className="mt-[150px]">
        <Outlet />
      </main>
    </>
  )
}



export default App
