/* eslint-disable no-duplicate-case */
/* eslint-disable default-case */
import React, { useEffect, useState } from "react";
import { Flex, Button, Image } from "@mantine/core";
import "./Navbarm.css";
import { Link } from "react-router-dom";

const Navbarm = () => {
  const [auSate, changeauState] = useState(false);
  const [pSate, changepSate] = useState(false);
  const [cSate, changecSate] = useState(false);
  const [cuSate, changecuSate] = useState(false);
  const [pathState, setPathState] = useState("");

  function auChanger() {
    changeauState(false);
    changepSate(false);
    changecSate(false);
    changecuSate(false);
  }
  function pChanger() {
    changepSate(true);
    changeauState(false);
    changecSate(false);
    changecuSate(false);
  }
  function cChanger() {
    changecSate(true);
    changepSate(false);
    changeauState(false);
    changecuSate(false);
  }
  function cuChanger() {
    changecuSate(true);
    changepSate(false);
    changecSate(false);
    changeauState(false);
  }

  useEffect(() => {
    console.log(window.location.pathname);
    setPathState(window.location.pathname);

    switch (pathState) {
      case "/products":
        pChanger();
        break;
      case "/compliance":
        cChanger();
        break;
      case "/contact-us":
        cuChanger();
        break;
      case "/home":
        auChanger();
        break;
      default:
        auChanger();
    }
  });

  return (
    <nav>
      <Flex
        gap="sm"
        justify="flex-start"
        align="center"
        className="maintineFlex"
      >
        <Link to="/home">
          {" "}
          <Image
            width={60}
            height={40}
            fit="contain"
            src={require("../Images/nav-pic.png")}
          />
        </Link>

        <h1 className="navbarm-header-jw">JOINT WELL</h1>
      </Flex>

      <Flex
        mih={50}
        gap="sm"
        justify="flex-end"
        align="center"
        direction="row"
        wrap="wrap"
        className="maintineFlex-2"
      >
        <Button
          variant="cyan"
          className={auSate ? "button-m-active-au" : "button-m"}
          color="cyan"
          onClick={auChanger}
        >
          ABOUT US{" "}
        </Button>
        <Link to="/products">
          <Button
            variant="cyan"
            className={pSate ? "button-m-active-p" : "button-m"}
            color="cyan"
            onClick={pChanger}
          >
            {" "}
            PRODUCTS
          </Button>
        </Link>
        <Link to="/compliance">
          <Button
            variant="cyan"
            className={cSate ? "button-m-active-c" : "button-m"}
            color="cyan"
            onClick={cChanger}
          >
            compliance
          </Button>
        </Link>

        <Link to="/contact-us">
          <Button
            variant="cyan"
            className={cuSate ? "button-m-active-cu" : "button-m"}
            color="cyan"
            onClick={cuChanger}
          >
            Contact Us
          </Button>
        </Link>
      </Flex>
    </nav>
  );
};

export default Navbarm;
