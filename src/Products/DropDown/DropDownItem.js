import React, { useState } from "react";
import "./DropDown.css";
import { Text } from "@mantine/core";

const DropDownItem = ({ name }) => {
  const [active, setActive] = useState(false);
  return (
    <Text
      fz="sm"
      className={active ? "drop-down-item-each-active" : "drop-down-item-each"}
      style={{ maxWidth: "3.2rem" }}
      onClick={() => setActive(!active)}
    >
      {name}
    </Text>
  );
};

export default DropDownItem;
