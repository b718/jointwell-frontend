import React, { useContext, useState, useEffect } from "react";
import { Center, Image, Text, Box, Flex, Button, Grid } from "@mantine/core";
import chinaPicOne from "../Images/China/WechatIMG43.jpeg";
import chinaPicTwo from "../Images/China/WechatIMG48.jpeg";
import chinaPicThree from "../Images/China/WechatIMG49.jpeg";
import chinaPicFour from "../Images/China/WechatIMG50.jpeg"; //mark
import chinaPicFive from "../Images/China/WechatIMG51.jpeg"; //mark
import chinaPicSix from "../Images/China/WechatIMG52.jpeg";
import chinaPicSeven from "../Images/China/WechatIMG311.jpeg";
import chinaPicEight from "../Images/China/WechatIMG312.jpeg";
import chinaPicNine from "../Images/China/WechatIMG313.jpeg";
import chinaPicTen from "../Images/China/WechatIMG314.jpeg";

import { BranchNameProvider } from "./Homepage";
import useWindowDimensions from "../Components/useWindowDimensions";

const JointWellChinaIntro = () => {
  const BranchNameSetting = useContext(BranchNameProvider);
  const { height, width } = useWindowDimensions();
  const [imageWidth, setImageWidth] = useState();
  const [imageHeight, setimageHeight] = useState();

  const imagePaths = [
    chinaPicOne,
    chinaPicTwo,
    chinaPicThree,
    chinaPicSix,
    chinaPicSeven,
    chinaPicEight,
    chinaPicNine,
    chinaPicTen,
  ];
  useEffect(() => {
    // width={width < 992 ? (width < 600 ? 150 : 350) : 120}
    // height={width < 992 ? (width < 600 ? 130 : 280) : 100}

    if (width >= 1200) {
      setImageWidth(160);
      setimageHeight(120);
    }

    if (width < 1200) {
      setImageWidth(110);
      setimageHeight(80);
    }

    if (width < 992) {
      setImageWidth(350);
      setimageHeight(280);
    }

    if (width < 600) {
      setImageWidth(150);
      setimageHeight(130);
    }
  }, [width]);

  return (
    <>
      {" "}
      <Center>
        <Box
          id="joint-well-china-box-writing"
          className="joint-well-intro-writing"
        >
          <Grid align="center">
            {" "}
            <Grid.Col span={6}>
              <h1
                className="joint-well-china-header"
                style={{
                  marginTop: "1rem",
                  marginLeft: "1rem",
                  maxWidth: "60vw",
                }}
              >
                JOINT WELL CHINA
              </h1>
            </Grid.Col>
            <Grid.Col span={6}>
              <Flex
                justify="flex-end"
                align="center"
                direction="row"
                wrap="wrap"
                style={{ marginRight: "1rem" }}
              >
                <Button
                  variant="outline"
                  compact="true"
                  style={{ color: "#0b4c95", borderBlockColor: "#0b4c95" }}
                  onClick={() => BranchNameSetting("")}
                >
                  X
                </Button>
              </Flex>
            </Grid.Col>
          </Grid>

          <Text
            style={{ marginTop: "1rem", marginLeft: "1rem", maxWidth: "60vw" }}
            className="joint-well-intro-text"
          >
            Established in 1995, Qingdao Joint Well Caps Co. Ltd has performed
            as a leading manufacturer and exporter of caps and hats in China.
          </Text>
          <Text
            style={{ marginTop: "1rem", marginLeft: "1rem", maxWidth: "60vw" }}
            className="joint-well-intro-text"
          >
            We have 800 skilled workers making 10 million quality caps each year
            and most of our products are selling to USA, Europe and Canada.
          </Text>
          <Text
            style={{ marginTop: "1rem", marginLeft: "1rem", maxWidth: "60vw" }}
            className="joint-well-intro-text"
          >
            We train, motivate and equip our people to always provide better
            quality and better service. We are capable of satisfying all your
            demand on caps and usually we do better than you expect.
          </Text>

          <Center>
            <Flex
              gap={"2rem"}
              style={{
                marginTop: "1rem",
                marginLeft: "1rem",
                marginBottom: "1rem",
              }}
              wrap="wrap"
              justify="flex-start"
              align="center"
              direction={width < 992 ? "column" : "row"}
            >
              {imagePaths.map((path) => {
                return (
                  <a href={path} target="_blank">
                    <Image
                      className="joint-well-intro-pic"
                      width={imageWidth}
                      height={imageHeight}
                      fit="cover"
                      radius="md"
                      src={path}
                    />
                  </a>
                );
              })}
            </Flex>
          </Center>
        </Box>
      </Center>
    </>
  );
};

export default JointWellChinaIntro;
