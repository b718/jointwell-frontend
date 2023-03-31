import logo from "./logo.svg";
import "./App.css";
import { Button } from "@mantine/core";
import Navbarm from "./Navbar-Maintine/Navbarm";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Compliance from "./Compliance/Compliance";
import React from "react";
import ContactUs from "./ContactUs/ContactUs";

function App() {
  return (
    <div className="App">
      <Navbarm />
      {/*The very first one will be our home page*/}

      <div>
        {" "}
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
