import style from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className = {style.navbarContainer}>
            <p>logo</p>
            <p>Welcome to city bank</p>
            <p>Buttons</p>
        </nav>
    )
};

export default Navbar;