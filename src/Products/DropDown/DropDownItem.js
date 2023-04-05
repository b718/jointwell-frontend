import React, { useContext, useEffect, useState } from "react";
import "./DropDown.css";
import { Text } from "@mantine/core";
import { SetProductsContext } from "../Products";
import { ActiveContext, DropDownContext } from "./DropDown";

const DropDownItem = ({ name, func, num }) => {
  const [active, setActive] = useState(false);
  const [counter, setCounter] = useState(0);
  const newProducts = useContext(SetProductsContext);
  const activeContent = useContext(ActiveContext);
  const parentNumber = useContext(DropDownContext);

  const settingProducts = () => {
    if (active) {
      newProducts(name.toLowerCase());
    } else {
      newProducts("");
    }
    //newProducts(name.toLowerCase());
  };

  useEffect(() => {
    settingProducts();
  }, [active]);

  useEffect(() => {
    setActive(false);
  }, [activeContent]);

  useEffect(() => {
    if (num === parentNumber) {
      console.log("parent number", parentNumber);
      console.log("counter and parent num", counter, parentNumber);
      if (counter % 2 == 0) {
        setActive(true);
        newProducts(name.toLowerCase());
      } else {
        setActive(false);
        newProducts("");
      }
    } else {
      setActive(false);
      setCounter(0);
    }
  });

  // useEffect(() => {
  //   if (num === parentNumber) {
  //     setActive(true);
  //     settingProducts();
  //   } else {
  //     setActive(false);
  //   }
  // }, [parentNumber]);

  return (
    <Text
      fz="sm"
      className={active ? "drop-down-item-each-active" : "drop-down-item-each"}
      style={{ maxWidth: "3.2rem" }}
      onClick={() => {
        func(num);
        setActive(!active);
        settingProducts();
        setCounter(counter + 1);
      }}
    >
      {name}
    </Text>
  );
};

export default DropDownItem;
