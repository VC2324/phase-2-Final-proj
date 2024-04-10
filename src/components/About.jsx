import { Outlet } from "react-router-dom"
function About(){
    return(
        <h1>
            this is about 
            <Outlet/>
        </h1>
    )
}

export default About