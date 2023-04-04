import "./App.css";
import Navbarm from "./Navbar-Maintine/Navbarm";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Compliance from "./Compliance/Compliance";
import React from "react";
import ContactUs from "./ContactUs/ContactUs";
import Products from "./Products/Products";
import { Grid, Image, Center } from "@mantine/core";

function App() {
  return (
    <div className="App">
      <Navbarm />
      {/*The very first one will be our home page*/}

      <Grid grow="true" style={{ maxWidth: "70vw", marginLeft: "0.1rem" }}>
        <Grid.Col span={6}>
          <Image src={require("./Images/joint-well-china.png")} />
        </Grid.Col>
        <Grid.Col span={6}>
          <Image src={require("./Images/joint-well-vietnam.png")} />
        </Grid.Col>
      </Grid>

      <div>
        {" "}
        <Routes>
          <Route path="/home" element={<Homepage />} />
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
