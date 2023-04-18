import React, { useState, useRef, useEffect, useContext } from "react";
import "./DropDown.css";
import DropDownItem from "./Unused/DropDownItem";
import { Text } from "@mantine/core";
import { SetProductsContext } from "../Products";
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
                    "max-height": parentRef.current.scrollHeight + "px",
                  }
                : {
                    "max-height": "0px",
                  }
            }
          >
            {/* <DropDownItem name={"test1"} func={setStyleActive} num={0} />
              <DropDownItem name={"test2"} func={setStyleActive} num={1} />
              <DropDownItem name={"BUCKET"} func={setStyleActive} num={2} />
              <DropDownItem name={"KNIT"} func={setStyleActive} num={3} />
              <DropDownItem name={"SPORTS"} func={setStyleActive} num={4} />
              <DropDownItem name={"OTHER"} func={setStyleActive} num={5} />*/}

            <DropDownHats />
          </div>
        </div>
      </ActiveContext.Provider>
    </DropDownContext.Provider>
  );
};

export default DropDown;
