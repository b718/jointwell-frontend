import React from "react";
import { Center, Image, Text, Box, Flex } from "@mantine/core";
import chinaPicOne from "../Images/China/WechatIMG43.jpeg";
import chinaPicTwo from "../Images/China/WechatIMG48.jpeg";
import chinaPicThree from "../Images/China/WechatIMG49.jpeg";

const JointWellChinaIntro = () => {
  const imagePaths = [chinaPicOne, chinaPicTwo, chinaPicThree];

  return (
    <>
      {" "}
      <Center>
        <Box
          id="joint-well-china-box-writing"
          style={{ maxWidth: "60vw", marginTop: "8rem" }}
        >
          <h1
            className="joint-well-china-header"
            style={{ marginTop: "1rem", marginLeft: "1rem", maxWidth: "60vw" }}
          >
            JOINTWELL CHINA
          </h1>
          <Text
            style={{ marginTop: "1rem", marginLeft: "1rem", maxWidth: "60vw" }}
          >
            Established in 2019, Jointwell Vietnam has grown into a dynamic and
            reliable manufacturer and exporter of caps and hats in Hue, Danang,
            Vietnam.
          </Text>
          <Text
            style={{ marginTop: "1rem", marginLeft: "1rem", maxWidth: "60vw" }}
          >
            We have 1000 skilled workers making 1,000,000 pcs quality caps each
            month and most of our products are selling to USA.
          </Text>
          <Text
            style={{ marginTop: "1rem", marginLeft: "1rem", maxWidth: "60vw" }}
          >
            With our consistent superior quality cap production, reasonable
            prices, timely deliveries, impeccable services, creative and
            innovative R&D team, we provide impeccable services ensuring
            customer ease and satisfaction.
          </Text>

          <Text
            style={{ marginTop: "1rem", marginLeft: "1rem", maxWidth: "60vw" }}
          >
            We aim to grow together with our valued customers based on long term
            business partnership. We train, motivate and equip our people to
            always provide better quality and better service. We appreciate
            every inquiry as a lead to a strong business relationship. Social
            responsibility is also our committed priority.
          </Text>

          <Text
            style={{ marginTop: "1rem", marginLeft: "1rem", maxWidth: "60vw" }}
          >
            We are WRAP certified ( No.127426). Thank you for visiting us on
            line! Send us your request and we will return you satisfaction.
          </Text>

          <Flex
            gap={"1rem"}
            style={{ marginTop: "1rem", marginLeft: "1rem" }}
            wrap="wrap"
            justify="flex-start"
            align="center"
          >
            {imagePaths.map((path) => {
              return (
                <Image
                  className="joint-well-china-pic"
                  width={280}
                  radius="md"
                  src={path}
                />
              );
            })}
          </Flex>
        </Box>
      </Center>
    </>
  );
};

export default JointWellChinaIntro;