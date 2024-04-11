import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom"

function Navbar(){
    return(
        <div id="nav">
            <Link to="/" >Home</Link>
            <Link to="/Colors">Colors</Link>
            <Link to ="/Decks">Decks and Sleeves</Link>
          
          
    

        </div>
    )
}

export default Navbar