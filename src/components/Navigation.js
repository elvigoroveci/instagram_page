import Logo from "../images/images.png";
import Menu from "./Menu";

const NavBar = (props) =>{
  
    return (
        <>
        <header className="NavBar"> 
        <div className="container">
            <img className="Logo" src={Logo} alt="instagram"/>
            <input type="text" className="Search" placeholder="Search" />
            <Menu />
        </div>
        </header>
        </>    
    );
}

export default NavBar;