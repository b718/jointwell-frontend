/* eslint-disable no-duplicate-case */
/* eslint-disable default-case */
import React, { useEffect, useState } from "react";
import { Flex, Button, Image } from "@mantine/core";
import "./Navbarm.css";
import { Link, useLocation } from "react-router-dom";

const Navbarm = () => {
  const location = useLocation();
  const [pathState, setPathState] = useState("");

  useEffect(() => {
    console.log(window.location.pathname);
    setPathState(location.pathname);
    console.log("path state", location.pathname);
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
            fit="contain"
            width={200}
            height={60}
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
        <Link to="/about-us">
          <Button
            variant="cyan"
            className={
              pathState === "/about-us" ? "button-m-active-au" : "button-m"
            }
            color="cyan"
          >
            ABOUT US{" "}
          </Button>
        </Link>

        <Link to="/products">
          <Button
            variant="cyan"
            className={
              pathState === "/products" ? "button-m-active-p" : "button-m"
            }
            color="cyan"
          >
            {" "}
            PRODUCTS
          </Button>
        </Link>

        <Link to="/compliance">
          <Button
            variant="cyan"
            className={
              pathState === "/compliance" ? "button-m-active-c" : "button-m"
            }
            color="cyan"
          >
            compliance
          </Button>
        </Link>

        <Link to="/contact-us">
          <Button
            variant="cyan"
            className={
              pathState === "/contact-us" ? "button-m-active-cu" : "button-m"
            }
            color="cyan"
          >
            Contact Us
          </Button>
        </Link>
      </Flex>
    </nav>
  );
};

export default Navbarm;
