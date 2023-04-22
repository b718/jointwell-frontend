import React from "react";
import "./Homepage.css";
import { Center, Grid, Image, Text, Box } from "@mantine/core";
import FooterFlex from "./Footer/FooterFlex";
import HomePageSlideShow from "../Slideshow/HomePageSlideShow";
import JointWellChinaIntro from "./JointWellChinaIntro";
import JointWellVietnamIntro from "./JointWellVietnamIntro";

const Homepage = () => {
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
              Our China factory was set up in 1995, making 10 million caps each
              year.
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
        style={{ maxWidth: "60vw", marginTop: "2rem" }}
        className="joint-well-china-paragraph"
      >
        <Grid.Col span={6}>
          <Box
            onClick={handleClickChinaScroll}
            className="home-page-box-introduction-c-v"
          >
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
                style={{ marginTop: "2rem", marginBottom: "10rem" }}
                className="home-page-text-header-c-v-2"
              >
                ENTER
              </Text>
            </Center>
          </Box>
        </Grid.Col>
        {/* <Grid.Col span={4}>
          <HomePageSlideShow />
        </Grid.Col> */}
        <Grid.Col span={6}>
          {" "}
          <Box
            onClick={handleClickVietnamScroll}
            className="home-page-box-introduction-c-v"
          >
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
                style={{ marginTop: "2rem", marginBottom: "10rem" }}
                className="home-page-text-header-c-v-2"
              >
                ENTER
              </Text>
            </Center>
          </Box>
        </Grid.Col>
      </Grid>

      {/* <JointWellChinaIntro />
      <JointWellVietnamIntro /> */}

      <FooterFlex />
    </div>
  );
};

export default Homepage;
