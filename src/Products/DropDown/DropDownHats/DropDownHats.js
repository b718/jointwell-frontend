import { Text } from "@mantine/core";
import React, { useState, useEffect, useContext } from "react";
import { SetProductsContext } from "../../Products";
import { ActiveContextHatsBase } from "./DropDownHatsBase";

const DropDownHats = () => {
  const [numActive, setNumActive] = useState(-1);
  const [counter, setCounter] = useState(1);
  const [name, setName] = useState("");
  const newProducts = useContext(SetProductsContext);
  const activeContent = useContext(ActiveContextHatsBase);

  const settingProducts = (name) => {
    if (counter % 2 === 0) {
      newProducts(name.toLowerCase());
    } else {
      newProducts("");
    }
    //newProducts(name.toLowerCase());
  };

  useEffect(() => {
    settingProducts(name);
  }, [counter]);

  useEffect(() => {
    setCounter(0);
  }, [numActive]);

  useEffect(() => {
    setNumActive(-1);
    setCounter(1);
    setName("");
  }, [activeContent]);

  return (
    <>
      <Text
        fz="sm"
        className={
          numActive === 0 && counter % 2 === 0 && activeContent
            ? "drop-down-item-each-active"
            : "drop-down-item-each"
        }
        style={{ maxWidth: "fit-content" }}
        onClick={() => {
          setNumActive(0);
          setCounter(counter + 1);
          setName("caps");
        }}
      >
        CAPS
      </Text>
      <Text
        fz="sm"
        className={
          numActive === 1 && counter % 2 === 0 && activeContent
            ? "drop-down-item-each-active"
            : "drop-down-item-each"
        }
        style={{ maxWidth: "fit-content" }}
        onClick={() => {
          setNumActive(1);
          setCounter(counter + 1);
          setName("visors");
        }}
      >
        VISORS{" "}
      </Text>
      <Text
        fz="sm"
        className={
          numActive === 2 && counter % 2 === 0 && activeContent
            ? "drop-down-item-each-active"
            : "drop-down-item-each"
        }
        style={{ maxWidth: "fit-content" }}
        onClick={() => {
          setNumActive(2);
          setCounter(counter + 1);
          setName("bucket");
        }}
      >
        BUCKET{" "}
      </Text>
      <Text
        fz="sm"
        className={
          numActive === 3 && counter % 2 === 0 && activeContent
            ? "drop-down-item-each-active"
            : "drop-down-item-each"
        }
        style={{ maxWidth: "fit-content" }}
        onClick={() => {
          setNumActive(3);
          setCounter(counter + 1);
          setName("knitted");
        }}
      >
        KNIT{" "}
      </Text>
      <Text
        fz="sm"
        className={
          numActive === 4 && counter % 2 === 0 && activeContent
            ? "drop-down-item-each-active"
            : "drop-down-item-each"
        }
        style={{ maxWidth: "fit-content" }}
        onClick={() => {
          setNumActive(4);
          setCounter(counter + 1);
          setName("sports");
        }}
      >
        SPORTS{" "}
      </Text>
      <Text
        fz="sm"
        className={
          numActive === 5 && counter % 2 === 0 && activeContent
            ? "drop-down-item-each-active"
            : "drop-down-item-each"
        }
        style={{ maxWidth: "fit-content" }}
        onClick={() => {
          setNumActive(5);
          setCounter(counter + 1);
          setName("other");
        }}
      >
        OTHER{" "}
      </Text>
    </>
  );
};

export default DropDownHats;
