import React from "react";
import "./Circle.css";
import { Center } from "@mantine/core";
const Circle = () => {
  return (
    <>
      <Center>
        <div id="circle-container">
          <div id="cc">
            <div class="circle" id="five"></div>
            <div class="circle" id="four"></div>
            <div class="circle" id="three"></div>
            <div class="circle" id="two"></div>
            <div class="circle" id="one"></div>
          </div>
        </div>
      </Center>
    </>
  );
};

export default Circle;
