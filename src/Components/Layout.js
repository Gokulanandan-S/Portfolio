import { Link,Outlet } from "react-router-dom";
import '../App.css';

const Layout=()=>{
    return(
        <div>
            <nav className="navbar">
                <span className="navbar1">
                <Link to="/"><button className="buttons">Profile</button></Link>
                </span>
                
                <Link to="/resume"><button className="buttons">Resume</button></Link>
                <Link to="/projects"><button className="buttons">Projects</button></Link>
                <Link to="/contact"><button className="buttons">Contact</button></Link>

            </nav>
            <Outlet />
        </div>
        
    );
}
export default Layout;