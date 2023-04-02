import React, { useState, useRef } from "react";
import "./DropDown.css";
import DropDownItem from "./DropDownItem";
import { Text } from "@mantine/core";

const DropDown = ({ dropDownName }) => {
  const [isActive, setIsActive] = useState(false);
  const parentRef = useRef();
  return (
    <div style={{ maxWidth: "10rem" }}>
      <Text
        fz="md"
        className="dropDownExperience"
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        {dropDownName}
      </Text>
      <div
        className="contentDropDown"
        ref={parentRef}
        style={
          isActive
            ? {
                "max-height": "450px",
              }
            : {
                "max-height": "0px",
              }
        }
      >
        <DropDownItem name={"CAPS"} />
        <DropDownItem name={"VISORS"} />
        <DropDownItem name={"BUCKET"} />
        <DropDownItem name={"KNIT"} />
        <DropDownItem name={"SPORTS"} />
        <DropDownItem name={"OTHER"} />
      </div>
    </div>
  );
};

export default DropDown;
