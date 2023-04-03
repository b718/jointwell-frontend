import React, { useContext, useEffect, useState } from "react";
import "./DropDown.css";
import { Text } from "@mantine/core";
import { ProductsContext, SetProductsContext } from "../Products";

const DropDownItem = ({ name, func, boolean, num }) => {
  const [active, setActive] = useState(false);
  const newProducts = useContext(SetProductsContext);

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
