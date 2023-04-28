import React, { useContext } from "react";
import {
  Center,
  Image,
  Text,
  Box,
  Flex,
  Button,
  Grid,
  MediaQuery,
} from "@mantine/core";
import vietNamPicOne from "../Images/Vietnam/WechatIMG53.jpeg";
import vietNamPicTwo from "../Images/Vietnam/WechatIMG56.jpeg";
import vietNamPicThree from "../Images/Vietnam/WechatIMG54.jpeg";
import { BranchNameProvider } from "./Homepage";

const JointWellVietnamIntro = () => {
  const BranchNameSetting = useContext(BranchNameProvider);
  const imagePaths = [vietNamPicTwo, vietNamPicOne, vietNamPicThree];
  return (
    <>
      {" "}
      <Center>
        <Box
          id="joint-well-vietnam-box-writing"
          style={{
            maxWidth: "55vw",
          }}
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
                JOINTWELL VIETNAM
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
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Flex
                gap={"2rem"}
                style={{
                  marginTop: "1rem",
                  marginLeft: "1rem",
                  marginBottom: "1rem",
                }}
                wrap="wrap"
                justify="center"
                align="center"
              >
                {imagePaths.map((path) => {
                  return (
                    <Image
                      className="joint-well-intro-pic"
                      width="15rem"
                      radius="md"
                      src={path}
                    />
                  );
                })}
              </Flex>
            </MediaQuery>

            <MediaQuery smallerThan="md" styles={{ display: "none" }}>
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
              >
                {imagePaths.map((path) => {
                  return (
                    <Image
                      className="joint-well-intro-pic"
                      width="15rem"
                      radius="md"
                      src={path}
                    />
                  );
                })}
              </Flex>
            </MediaQuery>
          </Center>
        </Box>
      </Center>
    </>
  );
};

export default JointWellVietnamIntro;
