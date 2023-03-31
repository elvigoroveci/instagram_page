import Home from "../images/home22.png";
import Inbox from "../images/messenger.png";
import Add from "../images/addddd.png";


const Menu = () =>{
    return(
        <div className="menu">
            <img className="icon" src={Home} alt="home"/>
            <img className="icon" src={Inbox} alt="inbox"/>
            <img className="icon" src={Add} alt="addPost"/>
        </div>
    );
}

export default Menu;