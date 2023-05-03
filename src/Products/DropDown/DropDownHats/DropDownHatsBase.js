import React, { useState, useRef, useEffect, useContext } from "react";
import "../../DropDown/DropDown.css";
import { Text } from "@mantine/core";
import { SetProductsContext } from "../../Products";
import DropDownHats from "./DropDownHats";

export const DropDownContext = React.createContext();
export const ActiveContext = React.createContext();

const DropDown = ({ dropDownName }) => {
  const [isActive, setIsActive] = useState(false);
  const [styleActive, setStyleActive] = useState(-1);
  const parentRef = useRef();
  const newProducts = useContext(SetProductsContext);

  useEffect(() => {
    if (!isActive) {
      setStyleActive(-1);
      newProducts("");
    }
  }, [isActive]);

  return (
    <DropDownContext.Provider value={styleActive}>
      <ActiveContext.Provider value={isActive}>
        <div style={{ maxWidth: "10rem" }}>
          <Text
            fz="md"
            className={
              !isActive ? "dropDownExperience" : "dropDownExperience-active"
            }
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
      </ActiveContext.Provider>
    </DropDownContext.Provider>
  );
};

export default DropDown;
