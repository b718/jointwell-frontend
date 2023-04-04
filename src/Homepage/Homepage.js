import React from "react";
import "./Homepage.css";
import { Center, Grid, Image, Flex, Text, Title, Header } from "@mantine/core";
import Homepagecard from "./Homepage-card";
import Footer from "./Footer/Footer";

const Homepage = () => {
  return (
    <div>
      <article>
        <Center>
          {" "}
          <section className="homePageText">
            {" "}
            Joint Well Caps specializes in manufacturing caps and hats for
            import customers over the world. Our China factory was set up in
            1995, making 10 million caps each year. Our Vietnam factory was set
            up in 2019, making 12 million caps each year. Our people make the
            products speak for themselves.{" "}
          </section>
        </Center>
      </article>

      <Grid columns={3} align="center" className="mGridHomePage" fluid>
        <Grid.Col span={1}>
          <Center>
            <Homepagecard image="joint-well-china.png" text="jointwell china" />
          </Center>
        </Grid.Col>
        <Grid.Col span={1}>
          <Center>
            <Image
              fit="contain"
              src={require("../Images/hat-pic.png")}
              className="homePageMainPicture"
            />
          </Center>
        </Grid.Col>
        <Grid.Col span={1}>
          <Center>
            <Homepagecard
              image="joint-well-vietnam.png"
              text="jointwell vietnam"
            />
          </Center>
        </Grid.Col>
      </Grid>

      <Grid
        style={{ maxWidth: "70vw", marginTop: "2rem" }}
        className="joint-well-china-paragraph"
      >
        <Grid.Col span={6}>
          <Image
            className="joint-well-china-pic"
            radius="md"
            fit="contain"
            src={require("../Images/joint-well-china-color.jpeg")}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <h1 className="joint-well-china-header">JOINTWELL CHINA</h1>
          <Text style={{ marginTop: "1rem", marginLeft: "1rem" }}>
            Established in 2019, Jointwell Vietnam has grown into a dynamic and
            reliable manufacturer and exporter of caps and hats in Hue, Danang,
            Vietnam.
          </Text>
          <Text style={{ marginTop: "1rem", marginLeft: "1rem" }}>
            We have 1000 skilled workers making 1,000,000 pcs quality caps each
            month and most of our products are selling to USA.
          </Text>
          <Text style={{ marginTop: "1rem", marginLeft: "1rem" }}>
            With our consistent superior quality cap production, reasonable
            prices, timely deliveries, impeccable services, creative and
            innovative R&D team, we provide impeccable services ensuring
            customer ease and satisfaction.
          </Text>

          <Text style={{ marginTop: "1rem", marginLeft: "1rem" }}>
            We aim to grow together with our valued customers based on long term
            business partnership. We train, motivate and equip our people to
            always provide better quality and better service. We appreciate
            every inquiry as a lead to a strong business relationship. Social
            responsibility is also our committed priority.
          </Text>

          <Text style={{ marginTop: "1rem", marginLeft: "1rem" }}>
            We are WRAP certified ( No.127426). Thank you for visiting us on
            line! Send us your request and we will return you satisfaction.
          </Text>
        </Grid.Col>
      </Grid>

      <Footer />
    </div>
  );
};

export default Homepage;
