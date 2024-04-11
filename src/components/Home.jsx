import { Outlet } from "react-router-dom"




function Home(){
    return(
        <div >
    <h1>Welcome Home this is where the history and simple rules will live</h1>
        
         <Outlet/>
         </div>
         
         
         )
}

export default Home