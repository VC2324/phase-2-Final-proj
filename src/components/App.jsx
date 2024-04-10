import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"



function App() {


  return (
    <div> 
       <Navbar/>
     <h1>project lives here</h1>

    <Outlet/>
  
    </div>
  )
}

export default App

