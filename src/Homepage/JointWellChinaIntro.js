import React, { useContext } from "react";
import { Center, Image, Text, Box, Flex, Button } from "@mantine/core";
import chinaPicOne from "../Images/China/WechatIMG43.jpeg";
import chinaPicTwo from "../Images/China/WechatIMG48.jpeg";
import chinaPicThree from "../Images/China/WechatIMG49.jpeg";
import { BranchNameProvider } from "./Homepage";

const JointWellChinaIntro = () => {
  const BranchNameSetting = useContext(BranchNameProvider);
  const imagePaths = [chinaPicOne, chinaPicTwo, chinaPicThree];
  return (
    <>
      {" "}
      <Center>
        <Box id="joint-well-china-box-writing" style={{ maxWidth: "50vw" }}>
          <Flex gap="30rem" align="center" justify="flex-start">
            {" "}
            <h1
              className="joint-well-china-header"
              style={{
                marginTop: "1rem",
                marginLeft: "1rem",
                maxWidth: "60vw",
              }}
            >
              JOINTWELL CHINA
            </h1>
            <Button onClick={() => BranchNameSetting("")}></Button>
          </Flex>

          <Text
            style={{ marginTop: "1rem", marginLeft: "1rem", maxWidth: "60vw" }}
          >
            Established in 1995, Qingdao Joint Well Caps Co. Ltd has performed
            as a leading manufacturer and exporter of caps and hats in China.
          </Text>
          <Text
            style={{ marginTop: "1rem", marginLeft: "1rem", maxWidth: "60vw" }}
          >
            We have 800 skilled workers making 10 million quality caps each year
            and most of our products are selling to USA, Europe and Canada.
          </Text>
          <Text
            style={{ marginTop: "1rem", marginLeft: "1rem", maxWidth: "60vw" }}
          >
            We train, motivate and equip our people to always provide better
            quality and better service. We are capable of satisfying all your
            demand on caps and usually we do better than you expect.
          </Text>

          <Flex
            gap={"2rem"}
            style={{ marginTop: "1rem", marginLeft: "1rem" }}
            wrap="wrap"
            justify="flex-start"
            align="center"
          >
            {imagePaths.map((path) => {
              return (
                <Image
                  className="joint-well-china-pic"
                  width="18rem"
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
