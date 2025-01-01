import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className = {style.navbarContainer}>
            <Link to="/home">
                <p>logo</p>
            </Link>

            <div>

                <Link to="/login">
                    <p>Login</p>
                </Link>

                <Link to="/register">
                    <p>Register</p>
                </Link>

            </div>
            <p>Welcome to city bank</p>
        </nav>
    )
};

export default Navbar;