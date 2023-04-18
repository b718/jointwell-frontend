import { Text } from "@mantine/core";
import React, { useState, useEffect, useContext } from "react";
import { SetDecorationContext } from "../../Products";
import { ActiveContext } from "./DropDownDecorationBase";

const DropDownDecoration = () => {
  const [numActive, setNumActive] = useState(-1);
  const [counter, setCounter] = useState(1);
  const [decoration, setDecoration] = useState("");
  const newDecoration = useContext(SetDecorationContext);
  const activeContent = useContext(ActiveContext);

  const settingProducts = (name) => {
    if (counter % 2 == 0) {
      newDecoration(name.toLowerCase());
    } else {
      newDecoration("");
    }
    //newProducts(name.toLowerCase());
  };

  useEffect(() => {
    settingProducts(decoration);
  }, [counter]);

  useEffect(() => {
    setCounter(0);
  }, [numActive]);

  useEffect(() => {
    setNumActive(-1);
    setCounter(1);
    setDecoration("");
  }, [activeContent]);

  return (
    <>
      <Text
        fz="sm"
        className={
          numActive == 0 && counter % 2 == 0 && activeContent
            ? "drop-down-item-each-active"
            : "drop-down-item-each"
        }
        style={{ maxWidth: "3.2rem" }}
        onClick={() => {
          setNumActive(0);
          setCounter(counter + 1);
          setDecoration("EMBROIDERY");
        }}
      >
        EMBROIDERY
      </Text>
      <Text
        fz="sm"
        className={
          numActive == 1 && counter % 2 == 0 && activeContent
            ? "drop-down-item-each-active"
            : "drop-down-item-each"
        }
        style={{ maxWidth: "3.2rem" }}
        onClick={() => {
          setNumActive(1);
          setCounter(counter + 1);
          setDecoration("PRINTING");
        }}
      >
        PRINTING{" "}
      </Text>
      <Text
        fz="sm"
        className={
          numActive == 2 && counter % 2 == 0 && activeContent
            ? "drop-down-item-each-active"
            : "drop-down-item-each"
        }
        style={{ maxWidth: "3.2rem" }}
        onClick={() => {
          setNumActive(2);
          setCounter(counter + 1);
          setDecoration("PATCHES");
        }}
      >
        PATCHES{" "}
      </Text>
      <Text
        fz="sm"
        className={
          numActive == 3 && counter % 2 == 0 && activeContent
            ? "drop-down-item-each-active"
            : "drop-down-item-each"
        }
        style={{ maxWidth: "3.2rem" }}
        onClick={() => {
          setNumActive(3);
          setCounter(counter + 1);
          setDecoration("WOVEN");
        }}
      >
        WOVEN{" "}
      </Text>
      <Text
        fz="sm"
        className={
          numActive == 4 && counter % 2 == 0 && activeContent
            ? "drop-down-item-each-active"
            : "drop-down-item-each"
        }
        style={{ maxWidth: "3.2rem" }}
        onClick={() => {
          setNumActive(4);
          setCounter(counter + 1);
          setDecoration("WASHING");
        }}
      >
        WASHING{" "}
      </Text>
    </>
  );
};

export default DropDownDecoration;
