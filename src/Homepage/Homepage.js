import React from "react";
import "./Homepage.css";
import { Center, Grid, Image, Flex, Text, Title } from "@mantine/core";
import Homepagecard from "./Homepage-card";

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

      <div className="footer-contact-us" style={{ paddingBottom: "10px" }}>
        <Flex direction="column" className="column-contact-us-footer-flex">
          <Title order={2} className="jw-footer-title">
            JOINT WELL VIETNAM
          </Title>
          <hr
            style={{
              width: "90vw",
              textAlign: "left",
              marginTop: "1rem",
              marginLeft: "5rem",
            }}
          />

          <Grid
            className="footer-grid-for-contacts"
            style={{ maxWidth: "99vw" }}
          >
            <Grid.Col span={4} style={{ background: "#0B4C95" }}>
              <section className="text-section-contact-us">
                <Text>Joint Well Head Office:</Text>
                <Text>Room 702, Building No.3,</Text>
                <Text>Guo Zhan Fortune Center, No.18 Qin Ling Road</Text>
                <Text>Qingdao China 266061</Text>
                <Text>Tel: +86 532 81118060 81118058</Text>
                <Text>E-mail: angela@jointwellcaps.com</Text>
              </section>
            </Grid.Col>{" "}
            <Grid.Col
              span={4}
              style={{ background: "#0B4C95" }}
              justify="center"
            >
              <section className="text-section-contact-us">
                <Text>Vietnam Factory:</Text>
                <Text>Jointwell Vietnam Co., Ltd.</Text>
                <Text>Thua Thien Hue City, Vietnam</Text>
                <Text style={{ marginTop: "1rem" }}>China Factory:</Text>
                <Text>Qingdao Joint Well Caps Co., Ltd.</Text>
                <Text>Qingdao, China</Text>
              </section>
            </Grid.Col>
            <Grid.Col
              span={4}
              style={{ background: "#0B4C95" }}
              justify="center"
            >
              {" "}
              <section className="text-section-contact-us">
                <Text>Vietnam Factory:</Text>
                <Text>Jointwell Vietnam Co., Ltd.</Text>
                <Text>Thua Thien Hue City, Vietnam</Text>
                <Text style={{ marginTop: "1rem" }}>China Factory:</Text>
                <Text>Qingdao Joint Well Caps Co., Ltd.</Text>
                <Text>Qingdao, China</Text>
              </section>
            </Grid.Col>
          </Grid>
        </Flex>
        <footer>
          <Center>
            <h1 className="jointWellFooter">©JOINTWELL 2023</h1>
          </Center>
        </footer>
      </div>
    </div>
  );
};

export default Homepage;
