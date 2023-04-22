import React from "react";
import "./Circle.css";
import { Center } from "@mantine/core";
const Circle = () => {
  return (
    <>
      <Center>
        <div id="circle-container">
          <div id="cc">
            <div className="circle" id="five"></div>
            <div className="circle" id="four"></div>
            <div className="circle" id="three"></div>
            <div className="circle" id="two"></div>
            <div className="circle" id="one"></div>
          </div>
        </div>
      </Center>
    </>
  );
};

export default Circle;
