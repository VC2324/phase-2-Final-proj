
import { Outlet } from "react-router-dom"
function Colors(){
    return(
      <div className="color-container">
      <h1>
            this will have the different colors and what kind of play style they represent 
           
         
            <Outlet/>
        </h1>
        </div>
    )
}

export default Colors