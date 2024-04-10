import { Link } from "react-router-dom";
import About from "./About";

function Navbar(){
    return(
        <div>
            <Link to="/" ></Link>
            <Link to="/about"></Link>
            <Link to ="/about/portfolio"></Link>
            <Link to ="/about/bio"></Link>
            <Link to ="/contact"></Link>

        </div>
    )
}

export default Navbar