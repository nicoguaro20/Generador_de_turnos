import "./App.css";
import Home from "./views/home/home";
import MyAppointments from "./views/MyAppointments/MyAppointments";
import Login from "./views/login/login";
import Register from "./views/register/register";
import { Routes, Route } from "react";
import Navbar from "./components/Navbar/Navbar";


console.log({ Home, MyAppointments, Login, Register });
function App() {

  return(
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/appointments" element={<MyAppointments />}/>
    </Routes>
    </>
  )
};

export default App;