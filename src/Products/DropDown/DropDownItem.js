import React, { useContext, useState } from "react";
import "./DropDown.css";
import { Text } from "@mantine/core";
import { ProductsContext, SetProductsContext } from "../Products";

const DropDownItem = ({ name }) => {
  const [active, setActive] = useState(false);
  const newProducts = useContext(SetProductsContext);

  const settingProducts = () => {
    if (active) {
      newProducts("test");
    } else {
      newProducts("");
    }
  };
  return (
    <Text
      fz="sm"
      className={active ? "drop-down-item-each-active" : "drop-down-item-each"}
      style={{ maxWidth: "3.2rem" }}
      onClick={() => {
        setActive(!active);
        settingProducts();
      }}
    >
      {name}
    </Text>
  );
};

export default DropDownItem;
