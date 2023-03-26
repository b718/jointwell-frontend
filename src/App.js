import logo from "./logo.svg";
import "./App.css";
import { Button } from "@mantine/core";
import Navbarm from "./Navbar-Maintine/Navbarm";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Navbarm />
      {/*The very first one will be our home page*/}

      <div>
        {" "}
        <Routes>
          <Route path="/home" element={<Homepage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
