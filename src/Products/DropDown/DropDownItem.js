import React from "react";
import "./DropDown.css";
import { Text } from "@mantine/core";

const DropDownItem = ({ name }) => {
  return (
    <Text fz="sm" className="drop-down-item-each">
      {name}
    </Text>
  );
};

export default DropDownItem;
