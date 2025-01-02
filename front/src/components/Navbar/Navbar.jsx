import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className = {style.navbarContainer}>

            <div className = {style.firstDiv}>
                <p>Email: <a href="mailto:jungarciagu@unal.edu.co">info@universa.com.co</a></p>
                <p>Teléfono: <a href="tel: 6042765194"> (+57) 604 276 51 94 </a></p>
                <p>Dirección: Calle 10#32-115 Of 400, Medellín - Colombia</p>
            </div>

            <div className = {style.secondDiv}>
           
                <Link to="/home">
                    <p>UNIVERSA</p>
                </Link>

                <Link to="/login">
                    <p>Login</p>
                </Link>

                <Link to="/register">
                    <p>Register</p>
                </Link>

            </div>
        </nav>
    )
};

export default Navbar;