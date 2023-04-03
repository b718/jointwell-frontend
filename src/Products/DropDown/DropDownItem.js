import React, { useContext, useEffect, useState } from "react";
import "./DropDown.css";
import { Text } from "@mantine/core";
import { SetProductsContext } from "../Products";
import { ActiveContext } from "./DropDown";

const DropDownItem = ({ name, func, boolean, num }) => {
  const [active, setActive] = useState(false);
  const newProducts = useContext(SetProductsContext);
  const activeContent = useContext(ActiveContext);

  const settingProducts = () => {
    if (active) {
      newProducts("test");
    } else {
      newProducts("");
    }
  };

  useEffect(() => {
    settingProducts();
  }, [active]);

  useEffect(() => {
    setActive(false);
  }, [activeContent]);

  return (
    <Text
      fz="sm"
      className={boolean ? "drop-down-item-each-active" : "drop-down-item-each"}
      style={{ maxWidth: "3.2rem" }}
      onClick={() => {
        func(num);
        setActive(!active);
      }}
    >
      {name}
    </Text>
  );
};

export default DropDownItem;
