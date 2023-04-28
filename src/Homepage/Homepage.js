import React, { useContext, useEffect, useState } from "react";
import "./Homepage.css";
import {
  Center,
  Grid,
  Image,
  Text,
  Box,
  MediaQuery,
  TextInput,
} from "@mantine/core";
import FooterFlex from "./Footer/FooterFlex";
import HomePageSlideShow from "../Slideshow/HomePageSlideShow";
import JointWellChinaIntro from "./JointWellChinaIntro";
import JointWellVietnamIntro from "./JointWellVietnamIntro";
import JointWellPictureHat from "../Images/hat-pic.png";

export const BranchNameProvider = React.createContext();
const Homepage = () => {
  const [branchName, setBranchName] = useState("");
  const handleClickChinaScroll = () => {
    const element = document.getElementById("joint-well-china-box-writing");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickVietnamScroll = () => {
    const element = document.getElementById("joint-well-vietnam-box-writing");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <BranchNameProvider.Provider value={setBranchName}>
      <div>
        <div style={{ maxWidth: "10rem" }}></div>
        <article>
          <Center>
            {" "}
            <section className="homePageText">
              {" "}
              <Text
                style={{
                  marginTop: "1rem",
                  marginLeft: "1rem",
                  marginRight: "1rem",
                }}
                className="home-page-open-statement-text"
              >
                {" "}
                Joint Well Caps specializes in manufacturing caps and hats for
                import customers over the world.
              </Text>
              <Text
                style={{
                  marginTop: "1rem",
                  marginLeft: "1rem",
                  marginRight: "1rem",
                }}
                className="home-page-open-statement-text"
              >
                {" "}
                Our China factory was set up in 1995, making 10 million caps
                each year.
              </Text>
              <Text
                style={{
                  marginTop: "1rem",
                  marginBottom: "1rem",
                  marginLeft: "1rem",
                  marginRight: "1rem",
                }}
                className="home-page-open-statement-text"
              >
                Our Vietnam factory was set up in 2019, making 12 million caps
                each year. Our people make the products speak for themselves.
              </Text>
            </section>
          </Center>
        </article>

        <Grid
          style={{ maxWidth: "80vw", marginTop: "2rem" }}
          className="joint-well-china-paragraph"
        >
          <Grid.Col span={4} onClick={() => setBranchName("china")}>
            <Box className="home-page-box-introduction-c-v">
              <Center>
                <Text
                  style={{ marginTop: "1rem" }}
                  className="home-page-text-header-c-v"
                >
                  JOINTWELL CHINA
                </Text>
              </Center>
              <Center>
                <Text
                  style={{ marginTop: "2rem" }}
                  className="home-page-text-header-c-v-2"
                >
                  ENTER
                </Text>
              </Center>
              {/* <Center>
                <Box style={{ marginTop: "6rem", marginBottom: "4rem" }}>
                  <Text fz="sm" className="home-page-text-font-size">
                    Qingdao Joint Well Caps Co., Ltd.
                  </Text>
                  <Text fz="sm" className="home-page-text-font-size">
                    Qingdao, China
                  </Text>
                </Box>
              </Center> */}
            </Box>
          </Grid.Col>
          <Grid.Col span={4}>
            <Center>
              <Image
                width={200}
                height={90}
                fit="contain"
                src={JointWellPictureHat}
                style={{ marginBottom: "2rem" }}
              />
            </Center>

            <Box className="home-page-box-introduction-c-v">
              <Center>
                <Text
                  className="home-page-text-header-c-v"
                  style={{ marginTop: "1rem" }}
                >
                  Head Office And Sales
                </Text>
              </Center>

              {/* <Center>
                <Box style={{ marginTop: "2rem" }}>
                  <Text fz="sm" className="home-page-text-font-size">
                    Room 702, Building No.3,
                  </Text>
                  <Text fz="sm" className="home-page-text-font-size">
                    Guo Zhan Fortune Center
                  </Text>
                  <Text fz="sm" className="home-page-text-font-size">
                    No.18 Qin Ling Road, Qingdao China 266061
                  </Text>
                  <Text fz="sm" className="home-page-text-font-size">
                    Tel: +86 532 81118060, 81118058
                  </Text>
                  <Text fz="sm" className="home-page-text-font-size">
                    E-mail: angela@jointwellcaps.com
                  </Text>
                </Box>
              </Center> */}
            </Box>
          </Grid.Col>
          <Grid.Col span={4} onClick={() => setBranchName("vietnam")}>
            {" "}
            <Box className="home-page-box-introduction-c-v">
              <Center>
                <Text
                  style={{ marginTop: "1rem" }}
                  className="home-page-text-header-c-v"
                >
                  JOINTWELL VIETNAM
                </Text>
              </Center>
              <Center>
                <Text
                  style={{ marginTop: "2rem" }}
                  className="home-page-text-header-c-v-2"
                >
                  ENTER
                </Text>
              </Center>

              {/* <Center>
                <Box style={{ marginTop: "6rem", marginBottom: "4rem" }}>
                  <Text fz="sm" className="home-page-text-font-size">
                    Qingdao Joint Well Caps Co., Ltd.
                  </Text>
                  <Text fz="sm" className="home-page-text-font-size">
                    Qingdao, China
                  </Text>
                </Box>
              </Center> */}
            </Box>
          </Grid.Col>
        </Grid>
        {branchName === "vietnam" ? (
          <JointWellVietnamIntro />
        ) : branchName === "china" ? (
          <JointWellChinaIntro />
        ) : (
          <div> </div>
        )}
        <FooterFlex />
      </div>
    </BranchNameProvider.Provider>
  );
};

export default Homepage;
