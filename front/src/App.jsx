import "./App.css";
import Home from "./views/home/home";
import { useState } from "react";
import MyAppointments from "./views/MyAppointments/MyAppointments";

function App() {

  return(
    <>
      <Home />
      <MyAppointments />
    </>
  )
};

export default App;