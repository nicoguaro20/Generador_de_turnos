import "./App.css";
import Home from "./views/home/home";
import Login from "./views/login/login";
import MyAppointments from "./views/MyAppointments/MyAppointments";
import Register from "./views/register/register";
import NewAppointment from "./views/NewAppointment/NewAppointment";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { useContext } from "react";

function App() {

  return(
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/appointments" element={<MyAppointments />}/>
      <Route path="/newappointment" element={<NewAppointment />} />
    </Routes>
    </>
  )
};

export default App;