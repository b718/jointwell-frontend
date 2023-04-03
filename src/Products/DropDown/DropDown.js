import React, { useState, useRef, useEffect, useContext } from "react";
import "./DropDown.css";
import DropDownItem from "./DropDownItem";
import { Text } from "@mantine/core";
import { SetProductsContext } from "../Products";

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
            <DropDownItem
              name={"CAPS"}
              func={setStyleActive}
              boolean={styleActive === 0 ? true : false}
              num={0}
            />
            <DropDownItem
              name={"VISORS"}
              func={setStyleActive}
              boolean={styleActive === 1 ? true : false}
              num={1}
            />
            <DropDownItem
              name={"BUCKET"}
              func={setStyleActive}
              boolean={styleActive === 2 ? true : false}
              num={2}
            />
            <DropDownItem
              name={"KNIT"}
              func={setStyleActive}
              boolean={styleActive === 3 ? true : false}
              num={3}
            />
            <DropDownItem
              name={"SPORTS"}
              func={setStyleActive}
              boolean={styleActive === 4 ? true : false}
              num={4}
            />
            <DropDownItem
              name={"OTHER"}
              func={setStyleActive}
              boolean={styleActive === 5 ? true : false}
              num={5}
            />
          </div>
        </div>
      </ActiveContext.Provider>
    </DropDownContext.Provider>
  );
};

export default DropDown;
