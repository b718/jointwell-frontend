import React from "react";
import "./Homepage.css";
import { Center, Grid, Image, Text, Box } from "@mantine/core";
import Homepagecard from "./Homepage-card";
import Footer from "./Footer/Footer";
import Circle from "../Aesthetic/Circle";
import FooterFlex from "./Footer/FooterFlex";
import HomePageSlideShow from "../Slideshow/HomePageSlideShow";

const Homepage = () => {
  return (
    <div>
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
        <Grid.Col span={4}>
          <Image
            className="joint-well-china-pic"
            radius="md"
            fit="contain"
            src={require("../Images/joint-well-china.png")}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <HomePageSlideShow />
        </Grid.Col>
        <Grid.Col span={4}>
          {" "}
          <Image
            className="joint-well-china-pic"
            radius="md"
            fit="contain"
            src={require("../Images/joint-well-vietnam.png")}
          />
        </Grid.Col>
      </Grid>
      <Center>
        <Box style={{ maxWidth: "60vw" }}>
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
        </Box>
      </Center>

      <FooterFlex />
    </div>
  );
};

export default Homepage;
