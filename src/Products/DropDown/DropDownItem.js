import React from "react";
import "./DropDown.css";
import { Text } from "@mantine/core";

const DropDownItem = ({ name }) => {
  return (
    <Text
      fz="sm"
      className="drop-down-item-each"
      style={{ maxWidth: "3.2rem" }}
    >
      {name}
    </Text>
  );
};

export default DropDownItem;
