import { Center, Image, Text } from "@mantine/core";
import React, { useState } from "react";
import "./Homepagecard.css";

const Homepagecard = (props) => {
  const [hover, setHover] = useState(false);

  function hoverHandle() {
    console.log(hover);
    setHover(!hover);
  }
  function testing() {
    console.log(typeof props.image);
    //Homepage-card.js:7 ../Images/joint-well-china.png
  }
  return (
    <div
      onClick={testing}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Center className="homePageCardCenter">
        <Image
          src={require(`../Images/${props.image}`)}
          className={hover ? "homePageImages-active" : "homePageImages"}
          fit="contain"
        />

        <Text
          fz="md"
          className={
            hover ? "propTextHomePageCard-active" : "propTextHomePageCard"
          }
        >
          {props.text}
        </Text>
        <Text
          fz="md"
          className={
            hover ? "enterTextHomePageCard-active" : "enterTextHomePageCard"
          }
        >
          ENTER
        </Text>
      </Center>
    </div>
  );
};

export default Homepagecard;
