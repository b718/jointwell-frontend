import React, { useContext, useState, useEffect } from "react";
import { Center, Image, Text, Box, Flex, Button, Grid } from "@mantine/core";
import vietNamPicOne from "../Images/Vietnam/WechatIMG53.jpeg";
import vietNamPicTwo from "../Images/Vietnam/WechatIMG56.jpeg";
import vietNamPicThree from "../Images/Vietnam/WechatIMG54.jpeg";
import vietNamPicFour from "../Images/Vietnam/WechatIMG45.jpeg";
import vietNamPicFive from "../Images/Vietnam/WechatIMG55.jpeg";
import vietNamPicSix from "../Images/Vietnam/WechatIMG303.jpeg";
import vietNamPicSeven from "../Images/Vietnam/WechatIMG304.jpeg";
import vietNamPicEight from "../Images/Vietnam/WechatIMG306.jpeg";

import { BranchNameProvider } from "./Homepage";
import useWindowDimensions from "../Components/useWindowDimensions";

const JointWellVietnamIntro = () => {
  const BranchNameSetting = useContext(BranchNameProvider);
  const { height, width } = useWindowDimensions();
  const [imageWidth, setImageWidth] = useState();
  const [imageHeight, setimageHeight] = useState();

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
  const imagePaths = [
    vietNamPicTwo,
    vietNamPicOne,
    vietNamPicThree,
    vietNamPicFour,
    vietNamPicFive,
    vietNamPicSix,
    vietNamPicSeven,
    vietNamPicEight,
  ];
  return (
    <>
      {" "}
      <Center>
        <Box
          id="joint-well-vietnam-box-writing"
          className="joint-well-intro-writing"
        >
          <Grid align="center">
            <Grid.Col span={6}>
              {" "}
              <h1
                className="joint-well-china-header"
                style={{
                  marginTop: "1rem",
                  marginLeft: "1rem",
                  maxWidth: "60vw",
                }}
              >
                JOINT WELL VIETNAM
              </h1>
            </Grid.Col>
            <Grid.Col span={6}>
              {" "}
              <Flex
                justify="flex-end"
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
            Established in 2019, Jointwell Vietnam has grown into a dynamic and
            reliable manufacturer and exporter of caps and hats in Hue, Danang,
            Vietnam.
          </Text>
          <Text
            style={{ marginTop: "1rem", marginLeft: "1rem", maxWidth: "60vw" }}
            className="joint-well-intro-text"
          >
            We have 1000 skilled workers making 1,000,000 pcs quality caps each
            month and most of our products are selling to USA.
          </Text>
          <Text
            style={{ marginTop: "1rem", marginLeft: "1rem", maxWidth: "60vw" }}
            className="joint-well-intro-text"
          >
            With our consistent superior quality cap production, reasonable
            prices, timely deliveries, impeccable services, creative and
            innovative R&D team, we provide impeccable services ensuring
            customer ease and satisfaction.
          </Text>

          <Text
            style={{ marginTop: "1rem", marginLeft: "1rem", maxWidth: "60vw" }}
            className="joint-well-intro-text"
          >
            We aim to grow together with our valued customers based on long term
            business partnership. We train, motivate and equip our people to
            always provide better quality and better service. We appreciate
            every inquiry as a lead to a strong business relationship. Social
            responsibility is also our committed priority.
          </Text>

          <Text
            style={{ marginTop: "1rem", marginLeft: "1rem", maxWidth: "60vw" }}
            className="joint-well-intro-text"
          >
            We are WRAP certified ( No.127426). Thank you for visiting us on
            line! Send us your request and we will return you satisfaction.
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

export default JointWellVietnamIntro;
