import React, { useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import style from "./Navbar.module.css";
import { useUser } from "../../context/userContext.jsx";

const Navbar = () => {

  const { user, setUser } = useUser();
  const location = useLocation(); // Hook para obtener la ubicación actual
  const firstDivRef = useRef(null);
  const secondDivRef = useRef(null);
  let lastScrollTop = 0;

  const navigate = useNavigate();

  const logoutUser = () => {
    setUser({})
    navigate("/")
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        firstDivRef.current.classList.add(style.hidden);
        secondDivRef.current.classList.add(style.moved);
      } else {
        firstDivRef.current.classList.remove(style.hidden);
        secondDivRef.current.classList.remove(style.moved);
      }

      lastScrollTop = Math.max(0, currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={style.navbarContainer}>
      <div ref={firstDivRef} className={style.firstDiv}>
        <p>Email: <a href="mailto:jungarciagu@unal.edu.co">info@universa.com.co</a></p>
        <p>Teléfono: <a href="tel: 6042765194">(+57) 604 276 51 94</a></p>
        <p>Dirección: Calle 10#32-115 Of 400, Medellín - Colombia</p>
        <h2>¡Bienvenidos a nuestro sitio web!</h2>
      </div>

      <div ref={secondDivRef} className={style.secondDiv}>
        {user.name ? (
          <>
            <Link to="/home"><p>Home</p></Link>
            <Link to="/appointments"><p>Appointments</p></Link>
            <button onClick={logoutUser} className={style.buttonDiv}>
              Logout
            </button>
          </>
        ) : (
          location.pathname === "/register" ? (
            <Link to="/"><p>Login</p></Link>
          ) : (
            <Link to="/register"><p>Register</p></Link>
          )
        )}
      </div>
    </nav>
  );
};

export default Navbar;