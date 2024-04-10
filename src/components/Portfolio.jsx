import { Outlet } from "react-router-dom"
function Portfolio(){
    return(
        <h1>
            Portfolio page
            <Outlet/>
        </h1>

    )
}


export default Portfolio