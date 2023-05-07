import React, { useState, useRef, useEffect, useContext } from "react";
import "../../DropDown/DropDown.css";
import { Text } from "@mantine/core";
import {
  CurrentActiveTab,
  SetCurrentActiveTab,
  SetDecorationContext,
} from "../../Products";
import DropDownDecoration from "./DropDownDecoration";

export const DropDownContext = React.createContext();
export const ActiveContextDecoration = React.createContext();

const DropDownDecorationBase = ({ dropDownName }) => {
  const [isActive, setIsActive] = useState(false);
  const [styleActive, setStyleActive] = useState(-1);
  const parentRef = useRef();
  const newProducts = useContext(SetDecorationContext);
  const activeTab = useContext(CurrentActiveTab);
  const setActiveTab = useContext(SetCurrentActiveTab);

  useEffect(() => {
    if (!isActive) {
      setStyleActive(-1);
      newProducts("");
    }
  }, [isActive]);

  useEffect(() => {
    if (activeTab === "decoration") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [activeTab]);

  return (
    <DropDownContext.Provider value={styleActive}>
      <ActiveContextDecoration.Provider value={isActive}>
        <div style={{ maxWidth: "10rem" }}>
          <Text
            fz="md"
            className={
              !isActive ? "dropDownExperience" : "dropDownExperience-active"
            }
            onClick={() => {
              setActiveTab("decoration");
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
                    maxHeight: parentRef.current.scrollHeight + "px",
                  }
                : {
                    maxHeight: "0px",
                  }
            }
          >
            <DropDownDecoration />
          </div>
        </div>
      </ActiveContextDecoration.Provider>
    </DropDownContext.Provider>
  );
};

export default DropDownDecorationBase;
