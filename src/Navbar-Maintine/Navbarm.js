import React, { useState } from "react";
import { Flex, Button, Image, MantineProvider, Text } from "@mantine/core";
import "./Navbarm.css";
import { Link } from "react-router-dom";

const Navbarm = () => {
  const [auSate, changeauState] = useState(false);
  const [pSate, changepSate] = useState(false);
  const [cSate, changecSate] = useState(false);
  const [cuSate, changecuSate] = useState(false);

  function auChanger() {
    changeauState(true);
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
        <Button
          variant="cyan"
          className={pSate ? "button-m-active-p" : "button-m"}
          color="cyan"
          onClick={pChanger}
        >
          {" "}
          PRODUCTS
        </Button>
        <Button
          variant="cyan"
          className={cSate ? "button-m-active-c" : "button-m"}
          color="cyan"
          onClick={cChanger}
        >
          compliance
        </Button>
        <Button
          variant="cyan"
          className={cuSate ? "button-m-active-cu" : "button-m"}
          color="cyan"
          onClick={cuChanger}
        >
          Contact Us
        </Button>
      </Flex>
    </nav>
  );
};

export default Navbarm;
