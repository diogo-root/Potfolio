import Navbar from "../navbar/Navbar";
import "./header.css";
function Header(){
    return(
        <header>
            <h1>Diogo Fronzaglia</h1>
            <Navbar/>
            <button>Light mode</button>      
        </header>            
    );
}
export default Header;    