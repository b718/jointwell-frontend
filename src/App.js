import "./App.css";
import Navbarm from "./Navbar-Maintine/Navbarm";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Compliance from "./Compliance/Compliance";
import React from "react";
import ContactUs from "./ContactUs/ContactUs";
import Products from "./Products/Products";

function App() {
  return (
    <div className="App">
      <Navbarm />
      {/*The very first one will be our home page*/}

      <div>
        {" "}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<Homepage />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
