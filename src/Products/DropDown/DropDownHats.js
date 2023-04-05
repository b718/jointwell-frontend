import { Text } from "@mantine/core";
import React, { useState, useEffect, useContext } from "react";
import { SetProductsContext } from "../Products";
import { ActiveContext } from "./DropDown";

const DropDownHats = () => {
  const [numActive, setNumActive] = useState(-1);
  const [counter, setCounter] = useState(1);
  const [name, setName] = useState("");
  const newProducts = useContext(SetProductsContext);
  const activeContent = useContext(ActiveContext);

  const settingProducts = (name) => {
    if (counter % 2 == 0) {
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
          numActive == 0 && counter % 2 == 0 && activeContent
            ? "drop-down-item-each-active"
            : "drop-down-item-each"
        }
        style={{ maxWidth: "3.2rem" }}
        onClick={() => {
          setNumActive(0);
          setCounter(counter + 1);
          setName("test1");
        }}
      >
        Test 1
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
          setName("test2");
        }}
      >
        Test 2
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
          setName("test3");
        }}
      >
        Test 3
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
          setName("");
        }}
      >
        Text 4
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
          setName("");
        }}
      >
        Test 5
      </Text>
    </>
  );
};

export default DropDownHats;
