/* eslint-disable no-duplicate-case */
/* eslint-disable default-case */
import React, { useEffect, useState } from "react";
import { Flex, Button, Image, Text } from "@mantine/core";
import "./Navbarm.css";
import { Link, useLocation } from "react-router-dom";
import useWindowDimensions from "../Components/useWindowDimensions";

const Navbarm = () => {
  const location = useLocation();
  const [pathState, setPathState] = useState("");
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    // console.log(window.location.pathname);
    setPathState(location.pathname);
    // console.log("path state", location.pathname);
  });

  return (
    <nav>
      <Flex
        gap="sm"
        justify="flex-start"
        align="center"
        className="maintineFlex"
        style={{ marginBottom: "1rem", marginTop: "1rem" }}
      >
        {" "}
        <div>
          <Link to="/about-us">
            <Image
              width={65}
              height={65}
              src={require("../Images/nav-pic.png")}
              style={{
                background: "white",
                borderRadius: "1.2rem",
                paddingTop: "0.5rem",
                paddingLeft: "0.7rem",
                paddingRight: "0.7rem",
                paddingBottom: "0.5rem",
              }}
              className="rotate-picture-nav-bar"
            />
          </Link>
        </div>
        <h1 className="navbarm-header-jw">JOINT WELL</h1>
      </Flex>

      <Flex
        gap="xs"
        justify="flex-end"
        align="center"
        direction={width < 768 ? "column" : "row"}
        wrap="wrap"
        className="maintineFlex-2"
        style={{ marginBottom: "1rem", marginTop: "1rem" }}
      >
        <Link to="/about-us">
          <Button
            variant="cyan"
            className={
              pathState === "/about-us" || pathState === "/"
                ? "button-m-active-au"
                : "button-m"
            }
            color="cyan"
            style={{ padding: "0rem", margin: "0rem 0.3rem 0rem 0.5rem" }}
          >
            <Text fz="md" className="mantine-flex-2-text">
              About Us{" "}
            </Text>
          </Button>
        </Link>

        <Link to="/products">
          <Button
            variant="cyan"
            className={
              pathState === "/products" ? "button-m-active-p" : "button-m"
            }
            color="cyan"
            style={{ padding: "0rem", margin: "0rem 0.3rem 0rem 0.5rem" }}
          >
            {" "}
            <Text fz="md" className="mantine-flex-2-text">
              Products{" "}
            </Text>
          </Button>
        </Link>

        <Link to="/compliance">
          <Button
            variant="cyan"
            className={
              pathState === "/compliance" ? "button-m-active-c" : "button-m"
            }
            color="cyan"
            style={{ padding: "0rem", margin: "0rem 0.3rem 0rem 0.5rem" }}
          >
            <Text fz="md" className="mantine-flex-2-text">
              Compliance{" "}
            </Text>
          </Button>
        </Link>

        {/*<Link to="/contact-us">
          <Button
            variant="cyan"
            className={
              pathState === "/contact-us" ? "button-m-active-cu" : "button-m"
            }
            color="cyan"
          >
            Contact Us
          </Button>
        </Link>*/}
      </Flex>
    </nav>
  );
};

export default Navbarm;
