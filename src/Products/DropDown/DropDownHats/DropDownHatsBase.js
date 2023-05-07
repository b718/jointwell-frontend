import React, { useState, useRef, useEffect, useContext } from "react";
import "../../DropDown/DropDown.css";
import { Text } from "@mantine/core";
import {
  CurrentActiveTab,
  SetCurrentActiveTab,
  SetProductsContext,
} from "../../Products";
import DropDownHats from "./DropDownHats";

export const DropDownContext = React.createContext();
export const ActiveContextHatsBase = React.createContext();
const DropDown = ({ dropDownName }) => {
  const [isActive, setIsActive] = useState(false);
  const [styleActive, setStyleActive] = useState(-1);
  const parentRef = useRef();
  const newProducts = useContext(SetProductsContext);
  const activeTab = useContext(CurrentActiveTab);
  const setActiveTab = useContext(SetCurrentActiveTab);

  useEffect(() => {
    if (!isActive) {
      setStyleActive(-1);
      newProducts("");
    }
  }, [isActive]);

  useEffect(() => {
    if (activeTab === "style") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [activeTab]);

  return (
    <DropDownContext.Provider value={styleActive}>
      <ActiveContextHatsBase.Provider value={isActive}>
        <div style={{ maxWidth: "10rem" }}>
          <Text
            fz="md"
            className={
              !isActive ? "dropDownExperience" : "dropDownExperience-active"
            }
            onClick={() => {
              setActiveTab("style");
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
            <DropDownHats />
          </div>
        </div>
      </ActiveContextHatsBase.Provider>
    </DropDownContext.Provider>
  );
};

export default DropDown;
