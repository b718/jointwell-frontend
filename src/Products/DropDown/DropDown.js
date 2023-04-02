import React, { useState, useRef } from "react";
import "./DropDown.css";
import DropDownItem from "./DropDownItem";
import { Center, Text, Box } from "@mantine/core";

const DropDown = ({ dropDownName }) => {
  const [isActive, setIsActive] = useState(false);
  const parentRef = useRef();
  return (
    <div>
      <Text
        fz="sm"
        className="dropDownExperience"
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        {dropDownName}
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
      </Text>
    </div>
  );
};

export default DropDown;
