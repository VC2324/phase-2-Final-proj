
import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"


function App() {


  return (
    <div className="app-container"> 
    <h1></h1>
     <Navbar />
    <Outlet/>
    </div>
  )
}

export default App

